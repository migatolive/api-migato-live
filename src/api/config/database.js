import {Sequelize} from 'sequelize';
import {db} from './vars.js';

export const sequelize = new Sequelize(
  db.name,
  db.user,
  db.pass,
  {
     host: db.host,
      port: db.port,
     dialect: db.dialect,
     logging: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
  }
);