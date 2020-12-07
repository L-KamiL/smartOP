const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const db = require("./app/config/db.config");

db.dbConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require("./app/routes/surgeon.route.js")(app);
require("./app/routes/intervention.route.js")(app);

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});
