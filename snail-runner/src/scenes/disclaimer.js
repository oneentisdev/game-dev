import k from "../kaplayCtx";

export default function disclaimer() {
  k.add([
    k.text("Snail Ruuun", { font: "mania", size: 65 }),
    k.pos(100, 100), // Position of the text
    k.color(255, 255, 255), // Optional: Set color
    k.area(), // Make it clickable
  ]);

  k.add([
    k.text("Telegram: /snailcto", { font: "mania", size: 65 }),
    k.pos(1350, 100),
    k.color(255, 255, 255),
    k.area(),
    "link"
  ]);
  

  k.onClick("link", () => {
      window.open("https://t.me/snailcto", "_blank"); // Open the link in a new tab
  });

  k.add([
    k.text("Press Space/Click/Touch to Start The Game", {
      font: "mania",
      size: 64,
    }),
    k.anchor("center"),
    k.pos(k.center()),
  ]);

  k.onButtonPress("jump", () => k.go("main-menu"));
}
