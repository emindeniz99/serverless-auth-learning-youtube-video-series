"use strict"
const api = require("lambda-api")()

const mongoose = require("mongoose")

const { MONGO_CONNECTION_STRING } = require("./config")

const UserModel = require("./models/user")
mongoose.connect(MONGO_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const errorFormatter = (error) => {
	let errorMessages = Object.keys(error.errors).map((key) => {
		return {
			field: key,
			message: error.errors[key].message,
		}
	})
	return {
		errorType: error._message,
		errorMessages
	}
}

// Define a route

api.get("/status", async (req, res) => {
	return { status: "Services is UP" }
})

api.post("/login", async (req, res) => {
	return { status: "not implemented yet" }
})

api.post("/register", async (req, res) => {
	// console.log(req)
	try {
		const user = new UserModel(req.body)
		await user.save()
		return { message: "Register success", data: { user } }
	} catch (e) {
		console.error(e)
		return res.error({ status: "Something went wrong", debugInfo: errorFormatter(e) })
	}
})

// Declare your Lambda handler
module.exports.hello = async (event, context) => {
	// Run the request
	// console.log("EVENT LOG -->", event)
	return await api.run(event, context)
}
