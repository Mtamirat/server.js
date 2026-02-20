const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// About route
app.get("/about", (req, res) => {
  res.send("About page");
});

// Conditional /foo
app.get("/foo", (req, res, next) => {
  if (Math.random() > 0.5) {
    res.send("sometimes this");
  } else {
    next();
  }
});

app.get("/foo", (req, res) => {
  res.send("and sometimes that");
});

// Regex route: /user or /username
app.get(/^\/user(name)?$/, (req, res) => {
  res.send("User or Username route matched");
});

// Dynamic route
app.get("/user/:username", (req, res) => {
  res.send(`Hello ${req.params.username}`);
});

// Query string route
app.get("/get", (req, res) => {
  console.log(req.query);
  res.send("Query received");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
