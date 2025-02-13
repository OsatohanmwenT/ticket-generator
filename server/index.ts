import express from "express";
import ImageKit from "imagekit";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
});

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/auth', (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});