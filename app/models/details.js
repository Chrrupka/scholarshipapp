import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const detailsSchema = new Schema({
    applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'application', required: true, unique: true },
    specialization: { type: String, required: true },
    education_level: { type: String, required: true },
    study_system: { type: String, required: true },
    bank_account_number: { type: String, required: true, maxlength: 26 },
    current_study_year: { type: Number, required: true },
    other_details: { type: String, required: true }
}, {
    collection: 'details'
});

detailsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Details', detailsSchema, 'details');
