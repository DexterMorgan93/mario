import { Application, Graphics } from "pixi.js";

interface PlatformI {
  app: Application;
}

class Platform extends Graphics {
  app: Application;

  constructor(options: PlatformI) {
    super();
    this.app = options.app;
  }

  draw() {
    this.rect(0, 0, 200, 20).fill({
      color: "black",
      alpha: 1,
    });
  }
}

export { Platform };
