import { Sequelize } from "sequelize-typescript";
import { User } from './models/User'

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "aclark",
  password: "",
  database: "safe_texting_development",
  logging: true,
  models: [User],
});

export default connection;