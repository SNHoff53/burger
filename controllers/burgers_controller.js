var express = require("express");
var router = express.Router();

// === Import the model (burger.js) to use its database functions ===
var burger = require("../models/burger.js");

// === Create all routes (get/post/put/delete) and set up logic within routes ===
router.get("/index", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.create(
        ["burger_name", "devoured"], 
        [req.body.burger_name, req.body.devoured],
        function(result) {
            // === Sending back to the ID ===
            res.json( { id: result.insertID });
    });
});

router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
        }, condition, function(result) {
            if (result,changedRows == 0) {
                // === If no row were changed, then the ID must not exist, so send a 404 error ===
                return res.status(404).end();
            } else {
                res.status(200).end();
        }
    });
});

router.delete("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result){
        if (result.affectedRows == 0) {
            // === If no row were changed, then the ID must not exist, so send a 404 error ===
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// === Export routes for server.js to use
module.exports = router;