import express from "express";
import { MongoClient } from "mongodb";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const url = `mongodb+srv://MikalMck:lilpep22@cluster0.6xwfuhj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);
await client.connect();
const db = client.db("myGymDb");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

app.use(cors({ origin: "http://localhost:8080"}));

app.use(
  express.static(path.resolve(__dirname, "../dist"), {
    maxAge: "1y",
    etag: false,
  })
);

app.post("/user", async (req, res) => {
  console.log("hello");
  const email = req.body.email;
  const password = req.body.password;
  await db.collection("users").insertOne({ email: email, password: password });

  const newuser = await db.collection("users").findOne({ email: email });
  console.log(newuser);
  res.json(newuser);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
