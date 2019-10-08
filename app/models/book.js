import mongoose, {Schema} from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String },
    visible: { type: Boolean, required: true, default: false },
    page: { type: Number, required: true }
  },
  {
    collection: 'book'
  });

bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Book', bookSchema, 'book');
