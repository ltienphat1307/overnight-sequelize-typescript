import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";

import { User, Group, UserGroupAssociation } from "../models";
import { Middleware } from "@overnightjs/core";
import validateUser from "../middlewares/validateUser";

@Controller("api/user")
export class UserController {
  @Post("signup")
  @Middleware(validateUser)
  public async signup(req: Request, res: Response): Promise<Response> {
    const { email, password, name } = req.body;

    let user = await User.findOne({
      where: { email },
    });

    if (user) {
      return res.status(400).send("User is existing");
    }

    user = await User.create({
      email,
      password,
      name,
    });

    return res.send(user);
  }

  @Post("join-group")
  public async joinGroup(req: Request, res: Response): Promise<Response> {
    const { userId, groupId } = req.body;

    const user = await User.findOne(userId);
    const group = await Group.findOne(groupId);

    if (!user || !group) {
      return res.status(400).send("User or Group is not existing");
    }

    const userGroupAssociation = await UserGroupAssociation.create({
      userId: user.id,
      groupId: group.id,
    });

    return res.send(userGroupAssociation);
  }
}
