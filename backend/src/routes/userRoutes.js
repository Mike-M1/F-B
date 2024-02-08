import e from 'express';
import express from 'express';
import db from "./server.js";

const router = express.Router();

router.get("/", async (req, res) => {
    res.send("hello");
});

router.post("/", async (req, res) => {
    console.log("hello");
    const email = req.body.email;
    const password = req.body.password;
   await db.collection("users").insertOne({ email: email, password: password});
   
    const newuser = await db.collection("users").findOne({ email: email });
    console.log(newuser);
    res.json(newuser);
});

export default router;