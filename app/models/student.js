import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const studentSchema = new Schema({
    applicationId: { type: mongoose.Schema.Types.ObjectId, ref: 'application', required: true, unique: true },
    album_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    pesel: { type: String, required: true, unique: true, maxlength: 11 },
    phone_number: { type: Number },
    address: { type: String, required: true }
}, {
    collections: 'student'
});

studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Student', studentSchema, 'student');
