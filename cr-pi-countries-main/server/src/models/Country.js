const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		"Country",
		{
			id: {
				type: DataTypes.STRING(3), // Código de tres letras
				allowNull: false,
				primaryKey: true, // Hace que el código sea la clave primaria
			},
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			bandera: {
				type: DataTypes.STRING, // URL o ruta a la imagen de la bandera
				allowNull: false,
			},
			continente: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			capital: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			subregion: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			area: {
				type: DataTypes.FLOAT,
				allowNull: false,
			},
			poblacion: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};
