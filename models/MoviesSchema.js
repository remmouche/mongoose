import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
	name: { type: String, require: true, trim: true },
	ratings: { type: Number, require: true, min: 1, max: 5 },
	money: {
		type: mongoose.Decimal128,
		required: true,
		validate: (v) => v >= 10,
	},
	genre: { type: Array },
	isActive: { type: Boolean },
	comments: [
		{ value: { type: String }, published: { type: Date, default: Date.now } },
	],
});

const movieModel = mongoose.model("Movie", movieSchema);

//create one document
const createDoc = async () => {
	try {
		//create new document
		const m1 = new movieModel({
			name: "Extraction 2",
			ratings: 4,
			money: 50000,
			genre: ["action", "adventure"],
			isActive: true,
			comments: [{ value: "That was an amazing movie." }],
		});
		const result = await m1.save();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

//create many documents
const createManyDoc = async () => {
	try {
		//create many documents
		const m1 = new movieModel({
			name: "Extraction 2",
			ratings: 4,
			money: 50000,
			genre: ["action", "adventure"],
			isActive: true,
			comments: [{ value: "That was an amazing movie." }],
		});
		const m2 = new movieModel({
			name: "Star Wars",
			ratings: 5,
			money: 100000,
			genre: ["action", "adventure"],
			isActive: true,
			comments: [{ value: "That was an amazing movie." }],
		});
		const m3 = new movieModel({
			name: "Alien 3",
			ratings: 2,
			money: 80000,
			genre: ["action", "adventure"],
			isActive: true,
			comments: [{ value: "That was an amazing movie." }],
		});
		const result = await movieModel.insertMany([m1, m2, m3]);
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

//Retrive data
const allDoc = async () => {
	try {
		const result = await movieModel.find();
		console.clear();
		result.forEach((movie) => {
			console.log(movie.name);
		});
	} catch (error) {
		console.log(error);
	}
};

export { createDoc, createManyDoc, allDoc };
