import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/skill", (req, res) => {
  res.render("skill.ejs");
});

app.get("/project", (req, res) => {
  res.render("project.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
