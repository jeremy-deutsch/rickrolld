import express from "express";

const app = express();

app.use((req, res) => {
  return res.redirect(302, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.get("/", (req, res) => {
  res.send("Hello World! You should never see this!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
