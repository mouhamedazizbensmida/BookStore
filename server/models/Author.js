import mongoose from "mongoose";

const authorSchema =new  mongoose.Schema(
	{
        lastName:{type:String,required:true},
        firstName:{type:String,required:true},
        nationality:{type:String,required:true},
        
	},
	
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema)
export default Author;