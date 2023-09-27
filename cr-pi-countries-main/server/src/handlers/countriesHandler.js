const {
	getAllCountriesController,
	getCountrieByIdController,
	getCountryByNameController,
} = require("../controllers/countriesController");

//los handlers se encargan de recibir la request y enviar la respuesta e invoca al controller(que es una funcion)
//el handler nunca interactua nunca con fuentes externas

const getCountrieByIdHandler = async (req, res) => {
	try {
		const { id } = req.params;

		const country = await getCountrieByIdController(id);
		res.status(200).json(country);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

const getCountriesHandler = async (req, res) => {
	const { name } = req.query;
	console.log(name);
	try {
		const result = name
			? await getCountryByNameController(name)
			: await getAllCountriesController();
		if (!result[0]) return res.status(404).send("Pais no encontrado");
		res.status(200).json(result);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

module.exports = {
	getCountrieByIdHandler,
	getCountriesHandler,
};
