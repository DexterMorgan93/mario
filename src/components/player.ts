import { Application, Graphics } from "pixi.js";

interface PlayerI {
  app: Application;
  velocityX: number;
  velocityY: number;
}

class Player extends Graphics {
  app: Application;
  velocityX;
  velocityY;
  gravity: number = 2;

  constructor(options: PlayerI) {
    super();
    this.app = options.app;
    this.velocityX = options.velocityX;
    this.velocityY = options.velocityY;
  }

  draw() {
    this.rect(0, 0, 100, 100).fill({
      color: "red",
      alpha: 1,
    });
  }

  update() {
    this.draw();
    this.position.y += this.velocityY;
    this.position.x += this.velocityX;

    // остановка плейера, если достигает низа
    if (
      this.position.y + this.height + this.velocityY <=
      this.app.canvas.height
    ) {
      this.velocityY += this.gravity;
    } else this.velocityY = 0;
  }
}

export { Player };
