import { Application } from "pixi.js";
import { Player } from "./components/player";

(async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });
  document.body.appendChild(app.canvas);

  const player = new Player({ app, velocityX: 0, velocityY: 30 });
  player.position.set(100, 100);
  app.stage.addChild(player);

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
        player.velocityY -= 10;
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
        player.velocityY -= 10;
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
