var express = require("express");
var router = express.Router();

var perguntasController = require("../controllers/perguntasController");

router.post("/cadastrar", function (req, res) {
    perguntasController.cadastrar(req, res);
});

router.get("/contarNovato", function (req, res) {
    perguntasController.contarNovato(req, res);
});

router.get("/contarPExperiente", function (req, res) {
    perguntasController.contarPExperiente(req, res);
});

router.get("/contarExperiente", function (req, res) {
    perguntasController.contarExperiente(req, res);
});

router.get("/makeBasica", function (req, res) {
    perguntasController.makeBasica(req, res);
});
router.get("/makeGlam", function (req, res) {
    perguntasController.makeGlam(req, res);
});
router.get("/makeHalloween", function (req, res) {
    perguntasController.makeHalloween(req, res);
});


module.exports = router;