const dataFromApi = require("../utils/getDataFromApi");
const { Country } = require("../db");

const sendDataToDb = async () => {
	try {
		const countries = await dataFromApi();

		await Country.bulkCreate(countries);

		console.log("Se cargaron los paises a la base de datos");
	} catch (error) {
		console.log(error.message);
	}
};

module.exports = sendDataToDb;
