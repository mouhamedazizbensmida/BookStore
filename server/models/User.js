import mongoose from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';
const userSchema =new  mongoose.Schema(
	{
		
        email:{type:String,required:true,unique:true},
        password:{type:String,required:false},
        lastName:{type:String,required:true},
        firstName:{type:String,required:true},
        role:{
                type: String,
                enum: [ 'admin', 'user'],
                default: 'user',
              },
	},
		
        { timestamps: true }
);
userSchema.virtual('fullname').get(function(){
        return this.firstName +'' + this.lastName;
     });
    
     userSchema.methods.toPublic = function() {
        const user = this;
        const userObject = user.toObject();
       
        delete userObject.password;
        userObject.name = '${user.firstName} ${user.lastName}';
        
        return userObject;
       }
       userSchema.plugin(uniqueValidator);
const User = mongoose.model("User", userSchema)
export default User;