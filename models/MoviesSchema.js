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
export { createDoc };
