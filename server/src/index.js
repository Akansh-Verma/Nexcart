import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/users.js';

const app = express();  

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

mongoose.connect("mongodb+srv://akansh:akansh20@nexcart.vw4vhok.mongodb.net/NexCart?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(3001, () => console.log("Server started!"));