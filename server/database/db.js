    
const Sequelize = require("sequelize");

//Database connection //sql12293818 // fxqUugG8nq
// const db = new Sequelize('sql12293818'	, 'root', 'root', {
//     host: 'sql2.freesqldatabase.com',
//     dialect: 'mysql'
// })
const db = new Sequelize('userdb', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
  });

db.sync({ force: false, logging: false  }).then(() => {
    console.log(`Database & tables created!`)
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;