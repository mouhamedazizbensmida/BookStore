import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.js"
import AuthorRoutes from "./routes/author.js"
import taskRoutes from "./routes/task.js"
import userRoutes from "./routes/user.js"
import CategoryRoutes from "./routes/category.js"
// import "./db.js"
/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
  
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  
  })
  .catch((error) => console.log(`${error} did not connect`));

/* ROUTES */
app.use("/Books", bookRoutes);
app.use("/Category", CategoryRoutes);
app.use("/Tasks", taskRoutes);
app.use("/Auth", userRoutes);
app.use("/Authors", AuthorRoutes);

