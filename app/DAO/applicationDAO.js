import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';

import ApplicationModel from '../models/application';
import * as _ from 'lodash';

async function getAll() {
    const result = await ApplicationModel.find();
    if (result) {
        return mongoConverter(result);
    }
    throw applicationException.new(applicationException.NOT_FOUND, 'Applications not found');
}

async function getApplicationById(id) {
    const result = await ApplicationModel.findById(id).populate('album_id').populate('details_id').populate('attachment_id');
    if (result) {
        return mongoConverter(result);
    }
    throw applicationException.new(applicationException.NOT_FOUND, 'Applications not found');
}

async function createApplication(payload) {
    const data = await ApplicationModel(payload).save();
    if (data) {
        return mongoConverter(data);
    }
    throw applicationException.new(applicationException.ERROR, 'Cannot create new application');
}


async function updateApplication(id, payload) {
    const data = await ApplicationModel.findByIdAndUpdate(id, _.omit(payload,'id'), { upsert:true, new: true });
    if (data) {
        return mongoConverter(data);
    }
    throw applicationException.new(applicationException.ERROR, 'Cannot update application');
}

async function removeById(id) {
    return ApplicationModel.findByIdAndRemove(id);
}


export default {
    getAll: getAll,
    getApplicationById: getApplicationById,
    createApplication: createApplication,
    updateApplication: updateApplication,
    removeById: removeById
};
