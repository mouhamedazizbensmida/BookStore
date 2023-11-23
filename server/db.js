import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

// lien local host :mongodb://127.0.0.1:27017/task-manager // lien atlas mongodb+srv://CIPEMCIPEM:CIPEM@clpem.j0gjlgy.mongodb.net/Task_Management?retryWrites=true&w=majority
const options = {useNewUrlParser : true,
useUnifiedTopology: true,};
mongoose 
     .connect(/*'mongodb://127.0.0.1:27017/BooksStore'*/process.env.MONGO_URL,options)
     .then(
        ()=>{console.log('connected  to MongoDB');}
     )
     .catch((error)=>{
        console.error('Error connecting to MongoDB',error);
     }

     )