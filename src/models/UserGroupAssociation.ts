import {
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  Model,
} from "sequelize-typescript";
import { User } from "./User";
import { Group } from "./Group";

@Table({
  tableName: "user_group_association",
})
export class UserGroupAssociation extends Model {
  @BelongsTo(() => User)
  public user!: User;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  public userId!: number;

  @BelongsTo(() => Group)
  public group!: Group;

  @ForeignKey(() => Group)
  @Column({ type: DataType.INTEGER })
  public groupId!: number;
}
