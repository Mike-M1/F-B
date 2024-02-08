import express from 'express';
import userRoutes from './userRoutes.js';
import plansRoutes from './plansRoutes.js';
import testimonialsRoutes from './testimonialsRoutes.js';
import blogRoutes from './blogRoutes.js';
import { MongoClient } from 'mongodb';
import path from 'path';
import cors from 'cors';


const url = `mongodb+srv://MikalMck:lilpep22@cluster0.6xwfuhj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
await client.connect();
const db = client.db("myGymDb");


const app = express();
app.use(cors());

app.use(express.json());



app.use('/user', userRoutes);
app.use('/plans', plansRoutes);
app.use('/testimonials', testimonialsRoutes);
app.use('/blog', blogRoutes);



app.listen(8000, () => console.log('Server is running on port 8000'))

export { app, db as default};