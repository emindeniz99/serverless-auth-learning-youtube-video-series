"use strict"
const api = require("lambda-api")()

const mongoose = require("mongoose")

const { MONGO_CONNECTION_STRING } = require("./config")

const UserModel = require("./models/user")
mongoose.connect(MONGO_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

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
		return { message:"Register success", data:{user} }
	} catch (e) {
		await console.log(e)
		return res.error({ status: "ERROR", debugInfo: e })
	}
})

// Declare your Lambda handler
module.exports.hello = async (event, context) => {
	// Run the request
	// console.log("EVENT LOG -->", event)
	return await api.run(event, context)
}
