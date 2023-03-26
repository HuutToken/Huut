import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import cookieParser from 'cookie-parser';
import postRoutes from './routes/Posts.js'
import commentRoutes from './routes/Comments.js'
import connectDB from "./connectMongoDb.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cookieParser());
app.use(cors());

app.use('/user', userRoutes)
app.use('/posts', postRoutes)
app.use('/comment', commentRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });