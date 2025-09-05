import express from "express";
import connectDB from "./db/connectDB.js";
import { allDoc, createDoc, createManyDoc, singleDoc } from "./models/MoviesSchema.js";
const app = express();
const port = process.env.PORT || 8000;
const DB_URL =
	process.env.DATABASE ||
	"mongodb+srv://movies:Movies2010@cluster0.5a24icp.mongodb.net/movies";

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Bismi Allah");
});

// const DATABASE_URL =
// 	"mongodb+srv://movies:Movies2010@cluster0.5a24icp.mongodb.net/movies";

connectDB(DB_URL);

//createDoc();
//createManyDoc();
//allDoc();
singleDoc();

app.listen(port, () => console.log(`Server listening on port: ${port}`));
