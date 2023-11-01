const { getAll, create, remove, update } = require('../controllers/userform.controllers');
const express = require('express');

const userformRouter = express.Router();

userformRouter.route("/")
	.get(getAll)
        .post(create)

userformRouter.route("/:id")  // /userform/:id
        .get(getAll)
        .delete(remove)
        .put(update)
		
module.exports = userformRouter;