import mongoose from "mongoose";
const taskSchema =new  mongoose.Schema(
	{
		title:{type:String,required:true},
        duration:{type:String,required:true},
        description:{type:String,required:false},
	},
	
);

const Task = mongoose.model("Task", taskSchema)
export default Task;