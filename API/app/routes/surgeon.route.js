module.exports = app => {
    const surgeon = require("../controllers/surgeon.controller.js");

    // Get all surgeon
    app.get("/api/surgeons", surgeon.getAllSurgeon);

    // Create a new surgeon
    app.post("/api/surgeons", surgeon.createSurgeon);
/*
    // get ad by owner_id
    app.get("/api/ads/owner/:id",  ad.getByOwnerId);


    // Get all items
    app.get("/api/ads/max", ad.findAllItem);

    // Find all object
    app.get("/api/ads", ad.findAll);

    // Retrieve a single object
    app.get("/api/ads/:id", ad.findOne);


    // Delete a single object
    app.delete("/api/ads/:id", guard, ad.removeOne);

    // Update a single object
    app.put("/api/ads/:id", ad.updateOne);

*/
};
