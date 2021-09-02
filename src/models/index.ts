import { Sequelize } from "sequelize-typescript";
import { User } from "./User";
import { Group } from "./Group";
import { UserGroupAssociation } from "./UserGroupAssociation";

const sequelize = new Sequelize({
  host: "localhost",
  database: "overnight_sequelize",
  dialect: "mysql",
  username: "root",
  password: "root",
});

sequelize.addModels([User, Group, UserGroupAssociation]);

export const initDB = async () => {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });
};

export { User, Group, UserGroupAssociation };
