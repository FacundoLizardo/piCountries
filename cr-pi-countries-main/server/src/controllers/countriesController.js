const { Country } = require("../db");

const { Op } = require("sequelize");

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
	const country = await Country.findAll({
		where: { nombre: { [Op.iLike]: `%${name}%` } },
	});
	if (country) return country;
	else return "No se encontro ningun pais con ese nombre";
};

module.exports = {
	getAllCountriesController,
	getCountrieByIdController,
	getCountryByNameController,
};
