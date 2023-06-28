"use strict";
exports.__esModule = true;
var api_1 = require("api");
var express_1 = require("express");
var app = (0, express_1["default"])();
app.use('/', api_1["default"]);
var port = 8000;
app.listen(port, function () {
    console.log("App listening on the port ".concat(port));
});
