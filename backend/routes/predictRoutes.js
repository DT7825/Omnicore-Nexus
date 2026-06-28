const express = require("express");
const router = express.Router();

router.post("/predict-attrition", (req, res) => {
  const { workload, satisfaction, salaryGrowth, promotionGap } = req.body;

  let risk = "Low";

  if (
    workload > 8 &&
    satisfaction < 5 &&
    salaryGrowth < 5 &&
    promotionGap > 2
  ) {
    risk = "High";
  } else if (
    workload > 6 &&
    satisfaction < 7
  ) {
    risk = "Medium";
  }

  res.json({
    attritionRisk: risk
  });
});

module.exports = router;