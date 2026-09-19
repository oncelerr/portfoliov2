export function printConsoleEasterEgg() {
  const title = "font-size:16px;font-weight:bold;color:#e3a53d;";
  const body = "font-size:13px;line-height:1.6;color:#a6acb6;";

  console.log("%c👀 Poking around the console, huh?", title);
  console.log(
    "%cI know what you're doing. Haha — this is just a portfolio, why attack? 😄\nNo API, no database, no backend secrets back here — just a static React build.\nIf you're actually good, let's make it interesting: markjonathan368@gmail.com",
    body,
  );
}
