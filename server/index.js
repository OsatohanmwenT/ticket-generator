"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imagekit_1 = __importDefault(require("imagekit"));
const port = "https://ticket-generator-5a50.onrender.com";
const imagekit = new imagekit_1.default({
    urlEndpoint: "https://ik.imagekit.io/jsosato",
    publicKey: "public_BjM5CXpp54AiW/VGonnnFV84nW4=",
    privateKey: "private_HMb89Qjtjt3XYHrkHj2fJw/uDj8=",
});
const app = (0, express_1.default)();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/auth', function (req, res) {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
});
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
