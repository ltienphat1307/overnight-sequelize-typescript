import { Server } from "@overnightjs/core";

import { initDB } from "./models";
import { UserController } from "./controllers/UserController";
import * as bodyParser from "body-parser";

export class App extends Server {
  constructor() {
    super();
    this.applyMiddleWares();
    this.boostrap();
  }

  public start(): void {
    const port = process.env.PORT || 3000;

    this.app.listen(port, () => {
      console.log("Server listening on port: " + port);
    });
  }

  private applyMiddleWares() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  private async boostrap() {
    // Connect to db
    await initDB();

    // add Controllers
    super.addControllers([new UserController()]);
  }
}
