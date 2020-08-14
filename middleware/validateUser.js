const db = require("../users/userDb")

function validateUserId() {
    return (req, res, next) => {
        db.getById(req.params.id)
		.then((user) => {
			if (user) {
                //attach the user data ti the req
                //so we can access it later
                req.user = user
				next()
			} else {
				res.status(404).json({
					message: "invalid user id"
				})
			}
		})
		.catch(next)
    }
}

function validateUser() {
    return (req, res, next) => {
        if(!Object.keys(req.body).length) {
            res.status(400).json({
                message: "missing user data"
            })
        } else if (!req.body.name) {
            res.status(400).json({
                message: "missing required name field",
            })
        } else {next()}
    }
}

module.exports = {
    validateUserId,
    validateUser
}