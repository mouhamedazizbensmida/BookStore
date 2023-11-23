import mongoose from "mongoose";
import mongooseIdValidator from "mongoose-id-validator";

const bookSchema =new  mongoose.Schema(
        {  
            title: {
              type: String,
              required: true,
            },
            author: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Author", // This references an "Author" model
              required: true,
            },
            category: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "Category", // This references an "Author" model
              required: true,
            }],  
           },	
           { timestamps: true }

	
);
bookSchema.plugin(mongooseIdValidator);

bookSchema.statics.findByAuthor = function (authorId) {
  return this.find({ author: authorId });
};

bookSchema.path('title').validate((value) => {
  return value.length > 0;
}, 'Le titre ne peut pas être vide.');

bookSchema.path('author').validate({
  validator: async function (value) {
    const author = await mongoose.model('author').findById(value);
    return author !== null;
  },
  message: "L'ID de l'author doit être valide."
});
const Book = mongoose.model("Book", bookSchema)
export default Book;