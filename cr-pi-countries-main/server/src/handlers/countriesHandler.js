const {
	getAllCountriesController,
	getCountrieByIdController,
	getCountryByNameController,
} = require("../controllers/countriesController");

const sendDataToDb = require("../controllers/pushDataToDB");

//los handlers se encargan de recibir la request y enviar la respuesta e invoca al controller(que es una funcion)
//el handler nunca interactua nunca con fuentes externas

const getCountriesHandler = async (req, res) => {
	try {
		const countries = await getAllCountriesController();

		res.status(200).json(countries);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

const getCountrieByIdHandler = async (req, res) => {
	try {
		const { id } = req.params;

		const country = await getCountrieByIdController(id);
		res.status(200).json(country);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

const getCountriesByNameHandler = async (req, res) => {
	try {
		const name = req.body;

		const country = await getCountryByNameController(name);

		res.status(200).json(country);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

module.exports = {
	getCountriesHandler,
	getCountrieByIdHandler,
	getCountriesByNameHandler,
};
