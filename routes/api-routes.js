
var db = require("../models");

// Routes
module.exports = function (app) {


  app.get("/api/projects", function (req, res) {
    db.projects.findAll({}).then(function (dbprojects) {
      res.json(dbprojects);
    });
  });





};
