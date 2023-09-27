const { Country } = require("../db");

const getAllCountriesController = async () => {
	const countries = await Country.findAll();
	console.log(countries);
	return countries;
};

const getCountrieByIdController = async (id) => {
	const country = await Country.findAll({ where: { id: id } });
	return country;
};

const getCountryByNameController = async (name) => {
	const country = await Country.findAll({ where: { nombre: name } });
	return country;
};

module.exports = {
	getAllCountriesController,
	getCountrieByIdController,
	getCountryByNameController,
};
