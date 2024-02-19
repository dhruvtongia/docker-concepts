const express = require("express");

const app = express();

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  console.log("inside main endpoint.");
  res.json({ msg: "inside main endpoint" });
});

app.listen(port, () => {
  console.log(`Application runnning on port: ${port}`);
});
