"use strict"

const mongoose = require("mongoose")

const { MONGO_CONNECTION_STRING } = require("./config")

module.exports.hello = async (event) => {
	const mongoose = require("mongoose")
	mongoose.connect(MONGO_CONNECTION_STRING, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	// Model - Table Structure
	const Cat = mongoose.models["Cat"] || mongoose.model("Cat", { name: String })

	// Create an object
	const kitty = new Cat({ name: "Zildjian"+ ( (Math.random()*100)%100 ) })

	//
	await kitty.save()

	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message:
					"Go Serverless v1.0! Your function executed successfully!",
				 kitty
				// input: event,
			},
			null,
			2
		),
	}

	// Use this code if you don't use the http event with the LAMBDA-PROXY integration
	// return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}
