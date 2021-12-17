//extra security packages(middlewares)
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const express = require("express");
const app = express();

// function to calclulate the collatz conjecture
const { getCollatzConjectureOutput } = require("./collatz/collatzConjecture");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 250,
  })
);
app.use(express.json());
// extra packages
app.use(helmet());
app.use(cors());
app.use(xss());

// routes
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      `<h1 style='text-align:center; color:limegreen;'>Collatz Conjecture API 0</h1>`
    );
});

app.post("/api/collatz", async (req, res) => {
  try {
    const { number } = req.body;
    if (!number) {
      return res.status(400).json({
        error: true,
        message: "please provide a number",
      });
    }

    if (isNaN(number) || typeof number != "number") {
      return res.status(400).json({
        error: true,
        message: "input needs to be a number",
      });
    } else {
      if (number <= 0) {
        return res.status(400).json({
          error: true,
          message: "input needs to be a positive number",
        });
      }
      let result = await getCollatzConjectureOutput(number);
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 5000;

const start = () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
