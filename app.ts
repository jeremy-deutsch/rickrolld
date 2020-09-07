import express from "express";

const app = express();

app.use((req, res) => {
  return res.redirect(302, "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
