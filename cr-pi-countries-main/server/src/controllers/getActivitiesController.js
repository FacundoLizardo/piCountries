const { Activities } = require("../db");

const getAllActivities = () => {
	const activities = Activities;
	return activities;
};

module.exports = getAllActivities;
