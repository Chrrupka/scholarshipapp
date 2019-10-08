import applicationException from '../service/applicationException';
import mongoConverter from '../service/mongoConverter';

import BookModel from '../models/book';
import * as _ from 'lodash';

async function getAll() {
  const result = await BookModel.find();
  if (result) {
    return mongoConverter(result);
  }
  throw applicationException.new(applicationException.NOT_FOUND, 'Books not found');
}

async function createBook(payload) {
  const data = await BookModel(payload).save();
  if (data) {
    return mongoConverter(data);
  }
  throw applicationException.new(applicationException.ERROR, 'Cannot create new book');
}

async function updateBook(id, payload) {
  const data = await BookModel.findByIdAndUpdate(id, _.omit(payload, 'id'), { upsert: true, new: true });
  if (data) {
    return mongoConverter(data);
  }
  throw applicationException.new(applicationException.ERROR, 'Cannot update book');
}

async function removeById(id) {
  return await BookModel.findByIdAndRemove(id);
}

export default {
  getAll: getAll,
  createBook: createBook,
  updateBook: updateBook,
  removeById: removeById
};
