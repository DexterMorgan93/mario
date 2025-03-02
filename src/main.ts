import { Application } from "pixi.js";
import { Player } from "./components/player";
import { Platform } from "./components/platform";

(async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });
  document.body.appendChild(app.canvas);

  const player = new Player({ app, velocityX: 0, velocityY: 0 });
  player.position.set(100, 100);
  app.stage.addChild(player);

  const platform = new Platform({ app });
  platform.position.set(200, 450);
  app.stage.addChild(platform);
  platform.draw();

  const keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
  };

  app.ticker.add(() => {
    player.update();
    // collision detection
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocityY >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.width + platform.position.x
    ) {
      player.velocityY = 0;
    }

    if (keys.right.pressed) {
      player.velocityX = 5;
    } else if (keys.left.pressed) {
      player.velocityX = -5;
    } else {
      player.velocityX = 0;
    }
  });

  document.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "w":
        player.velocityY -= 20;
        break;
      case "d":
        keys.right.pressed = true;
        break;
      case "a":
        keys.left.pressed = true;
        break;
    }
  });

  document.addEventListener("keyup", ({ key }) => {
    switch (key) {
      case "w":
        player.velocityY -= 20;
        break;
      case "d":
        keys.right.pressed = false;
        break;
      case "a":
        keys.left.pressed = false;
        break;
    }
  });
})();
