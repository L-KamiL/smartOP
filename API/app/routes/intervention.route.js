module.exports = app => {
    const intervention = require("../controllers/intervention.controller.js");

    // Create a new intervention
    app.post("/api/interventions", intervention.createIntervention);
};

