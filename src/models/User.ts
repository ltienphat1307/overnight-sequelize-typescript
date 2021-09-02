import {
  Table,
  Column,
  DataType,
  IsEmail,
  HasMany,
  Model,
  BelongsToMany,
} from "sequelize-typescript";

import { UserGroupAssociation } from "./UserGroupAssociation";
import { Group } from "./Group";

@Table({
  tableName: "user",
})
export class User extends Model {
  @Column({ type: DataType.STRING })
  public name!: string;

  @IsEmail
  @Column({ type: DataType.STRING })
  public email!: string;

  @Column({ type: DataType.STRING })
  public password!: string;

  @HasMany(() => UserGroupAssociation)
  public userGroupAssociation?: UserGroupAssociation[];
}
