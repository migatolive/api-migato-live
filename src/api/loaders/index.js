import {sequelize} from '../config/database.js';

// inicializar modelos y sincronizar base de datos
const initModels = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true }); // force false en prod
        console.log('Connection has been established successfully.');
        console.log('All models were synchronized successfully.');
        console.log('Database Migration completed!'); //ref https://sequelize.org/docs/v6/other-topics/migrations/
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default initModels;