"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 3333;
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(port, function () {
    console.log("O servidor est\u00E1 escutando na porta " + port);
});
