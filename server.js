const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/", (req, res) => {
  res.send("H E C K Y E A H");
});

function pong() {
  try {
    for (let i = 1; i <= 2; i++) {
      setTimeout(
        () =>
          fetch("https://lucky66-silver-predictor.glitch.me/INR/game/record"),
        250000,
      );
    }
  } catch (error) {
    console.log({ error: error });
  }

  console.log("hAha site ping go BrRRR");
}

setInterval(pong, 60000);

// listen for requests | Don't change this!
const listener = app.listen(process.env["PORT"], () => {
  console.log("Listening on PORT " + listener.address().port);
});
