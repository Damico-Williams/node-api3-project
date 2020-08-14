const db = require("../posts/postDb")

function validatePost() {

    return (req, res, next) => {
        if(!Object.keys(req.body).length) {
            res.status(400).json({
                message: "missing post data"
            })
        } else if (!req.body.text) {
            res.status(400).json({
                message: "missing required text field",
            })
        } else {next()}
    }
}

module.exports = {
    validatePost
}