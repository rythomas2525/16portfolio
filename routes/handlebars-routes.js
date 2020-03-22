// var express = require("express");



var db = require("../models");


module.exports = function (app) {
    app.get("/", function (req, res) {
        console.log("works")
        db.projects.findAll({ raw: true }).then(function (projectsData) {
            // var hbsObject = {
            //     laptop_data: laptopData
            // };
            // console.log(hbsObject);  
            console.log(projectsData);

            res.render("index", { projects_data: projectsData });
            // res.json(laptopData)

            // res.render("index", hbsObject);
            // res.json(data)
        });
    });

    app.get("/projects", function (req, res) {
        console.log("sell page works")
        res.render("projects");
    });

}