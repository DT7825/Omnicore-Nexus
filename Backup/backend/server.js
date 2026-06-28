const express = require("express");
const cors = require("cors");
require("dotenv").config();

const employeeRoutes = require("./routes/employeeRoutes");
const predictRoutes = require("./routes/predictRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", employeeRoutes);
app.use("/", predictRoutes);

app.get("/", (req, res) => {
  res.send("OmniCore Nexus Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});