import mongoose from "mongoose";


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
           }

	
);

const Book = mongoose.model("Book", bookSchema)
export default Book;