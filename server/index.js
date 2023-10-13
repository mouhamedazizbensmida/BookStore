import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.js"
/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());

/* ROUTES */
app.use("/Books", bookRoutes);

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