//console.log('Node backend');
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Node backend running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});

