    
const Sequelize = require("sequelize");

<<<<<<< HEAD:database-mysql/db.js
//Database connection
const db = new Sequelize('userdb', 'root', 'rbk6', {
=======
//Database connection //sql12293818 // fxqUugG8nq
// const db = new Sequelize('sql12293818'	, 'root', 'root', {
//     host: 'sql2.freesqldatabase.com',
//     dialect: 'mysql'
// })
const db = new Sequelize('userdb', 'root', 'root', {
>>>>>>> d1852d77edad778c03f2d47ce8ace9ed604fd864:server/database/db.js
    host: 'localhost',
    dialect:'mysql'
  });

db.sync({ force: false, logging: false  }).then(() => {
    console.log(`Database & tables created!`)
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;