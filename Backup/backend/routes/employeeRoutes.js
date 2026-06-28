const express = require("express");
const router = express.Router();

// Temporary employee data
const employees = [
  {
    name: "Rahul Shukla",
    role: "AI Engineer",
    attrition: "High",
    promotion: "Ready",
    adaptability: 92,
    skills: ["Python", "ML", "Deep Learning"]
  },
  {
    name: "Priya Verma",
    role: "Product Manager",
    attrition: "Low",
    promotion: "6 Months",
    adaptability: 84,
    skills: ["Leadership", "Strategy", "Analytics"]
  },
  {
    name: "Aman Singh",
    role: "Cloud Engineer",
    attrition: "Medium",
    promotion: "Needs Training",
    adaptability: 76,
    skills: ["AWS", "Docker", "Kubernetes"]
  }
];

// API 1 - Return all employees
router.get("/employees", (req, res) => {
  res.json(employees);
});

// API 2 - Return dashboard statistics
router.get("/dashboard", (req, res) => {

  // Total number of employees
  const totalEmployees = employees.length;

  // Count employees whose attrition is High
  const highRisk = employees.filter(employee =>
    employee.attrition === "High"
  ).length;

  // Count employees ready for promotion
  const promotionReady = employees.filter(employee =>
    employee.promotion === "Ready"
  ).length;

  // Count employees with adaptability below 80
  // (For now we are using this as a simple burnout indicator)
  const burnoutRisk = employees.filter(employee =>
    employee.adaptability < 80
  ).length;

  // Send all statistics to the frontend
  res.json({
    totalEmployees,
    highRisk,
    burnoutRisk,
    promotionReady
  });

});

module.exports = router;