const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "Node backend running" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});

// New route to call FastAPI
app.post("/api/ask", async (req, res) => {
  try {
    const { question } = req.body;

    // Call FastAPI
    const response = await axios.post("http://localhost:8000/ai/health");

    res.json({
      nodeStatus: "Node backend running",
      fastAPIStatus: response.data,
      yourQuestion: question
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error calling FastAPI backend" });
  }
});

