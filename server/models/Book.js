import mongoose from "mongoose";
const bookSchema =new  mongoose.Schema(
        {
            title: {
              type: String,
              required: true,
            },
            author: {
              type: String,
              required: true,
            },
            publicationYear: Number,
            genre: {
              type: String,
              enum: ['Fiction', 'Non-fiction', 'Science Fiction', 'Mystery', 'Fantasy', 'Biography', 'Other'],
            },
            pageCount: Number,
            language: String,
            publisher: String,
            description: String,
            // Add more attributes as needed
          },
          {
            timestamps: true, // Add timestamps option
          }
	
);

const Book = mongoose.model("Book", bookSchema)
export default Book;