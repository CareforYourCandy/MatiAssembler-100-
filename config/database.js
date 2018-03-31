
//Conectar a la base de datos
const Sequelize = require('sequelize');
const connection = new Sequelize('mydb', 'root', 'dictadormarico69', {
  	host: 'localhost',
  	dialect : 'mysql',
	define : {
		freezeTableName : true,
		timestamps : false
    }
});
//Test connection
connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
	secret: 'pink88pink',
	connection
}