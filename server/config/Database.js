import { Sequelize } from "sequelize";

const db = new Sequelize('anton_auth', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;