// code away!
const express = require("express")
const postRouter = require("./posts/postRouter")
const logger = require("./middleware/logger")
const userRouter = require("./users/userRouter")


const server = express()
const port = process.env.PORT || 2000

server.use(express.json())
server.use(postRouter)
server.use(userRouter)
server.use(logger())

server.use((err, req, res, next) => {
	console.log(err)

	res.status(500).json({
		message: "error"
	})
})


server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})