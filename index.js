import express from "express";
const app = express();
const port = process.env.PORT || 8000;
import connectDB from "./db/connectDB.js";

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Bismi Allah");
});

const DATABASE_URL =
	"mongodb+srv://movies:Movies2010@cluster0.5a24icp.mongodb.net/movies";

connectDB(DATABASE_URL);

app.listen(port, () => console.log(`Server listening on port: ${port}`));
