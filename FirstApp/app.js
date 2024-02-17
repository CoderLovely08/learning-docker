import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  try {
    res.send(`<h1>Hey theres</h1>`);
  } catch (error) {
    console.error(error.message);
    res.send(`<h1>Uhh ohhh!</h1>`);
  }
});

app.listen(PORT, (err) => {
  if (err) console.error(`Error running server: ${err.message}`);
  console.log(`Server is running on port ${PORT}`);
});
