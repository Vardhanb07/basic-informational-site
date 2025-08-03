const express = require("express");
const path = require("node:path");

const app = express();

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "pages/index.html"));
});

app.get("/:path", (req, res) => {
  if (req.params.path === "about" || req.params.path === "contact-me") {
    res
      .status(200)
      .sendFile(path.join(__dirname, `pages/${req.params.path}.html`));
  } else {
    res.status(404).sendFile(path.join(__dirname, "pages/404.html"));
  }
});

app.listen(8000, () => {
  console.log("server is listening");
});
