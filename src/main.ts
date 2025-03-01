import { Application } from "pixi.js";
import { Player } from "./components/player";

(async () => {
  const app = new Application();
  await app.init({ background: "#1099bb", resizeTo: window });
  document.body.appendChild(app.canvas);

  const player = new Player({ app, velocityX: 0, velocityY: 0 });
  player.position.set(100, 100);
  app.stage.addChild(player);

  app.ticker.add(() => {
    player.update();
  });
})();
