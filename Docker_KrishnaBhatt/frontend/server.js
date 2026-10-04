const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://backend:5000";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/api/submit", async (req, res) => {
  try {
    const response = await fetch(`${BACKEND_URL}/submit`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Backend request failed:", error.message);
    res.status(502).json({success: false, message: "Could not connect to Flask backend."});
  }
});

app.get("/health", (req, res) => res.json({service: "frontend", status: "ok"}));
app.listen(PORT, "0.0.0.0", () => console.log(`Frontend running on port ${PORT}`));