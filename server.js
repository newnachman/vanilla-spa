
// https://www.youtube.com/watch?v=6BozpmSjk-Y
// Build a Single Page Application with JavaScript (No Frameworks)

const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "client", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("client", "index.html"));
})

app.listen(process.env.PORT || 5069, () => console.log("Server is running... at: " + 5069));