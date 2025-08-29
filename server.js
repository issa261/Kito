const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// تقديم الملفات الثابتة (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// صفحة رئيسية
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
