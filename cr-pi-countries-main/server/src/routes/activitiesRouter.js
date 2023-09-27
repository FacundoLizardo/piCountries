const { Router } = require("express");
const activitiesRouter = Router();
const {
	postActivitie,
	getAllActivitiesHandler,
} = require("../handlers/activitiesHandler");

activitiesRouter.post("/", postActivitie);

activitiesRouter.get("/", getAllActivitiesHandler);

module.exports = activitiesRouter;
