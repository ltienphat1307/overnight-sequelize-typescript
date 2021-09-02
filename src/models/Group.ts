import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { UserGroupAssociation } from "./UserGroupAssociation";

@Table({
  tableName: "group",
})
export class Group extends Model {
  @Column({ type: DataType.STRING })
  public name!: string;

  @HasMany(() => UserGroupAssociation)
  public userGroupAssociation?: UserGroupAssociation[];
}
