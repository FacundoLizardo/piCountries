const getAllActivities = require("../controllers/getActivitiesController");
const { Activity } = require("../db");
//recibe info por body
const postActivitie = (req, res) => {
	const activitie = req.body;
	try {
		res.status(200).send("here you will add an activitie");
	} catch (error) {}
};

//recibne info por query
const getAllActivitiesHandler = (req, res) => {
	const { activity } = req.query;
	if (activity) {
		res.status(200).send(`aca busco la actividada llamada ${activity}`);
	} else {
		res.status(200).send(getAllActivities());
	}
};

module.exports = { postActivitie, getAllActivitiesHandler };
