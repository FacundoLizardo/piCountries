const { Router } = require("express");
const countriesRouter = Router();
const {
	getCountriesHandler,
	getCountrieByIdHandler,
	getCountriesByNameHandler,
} = require("../handlers/countriesHandler");

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountrieByIdHandler);

countriesRouter.get("/name?=", getCountriesByNameHandler);

module.exports = countriesRouter;
