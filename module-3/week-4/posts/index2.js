import express from "express";
import bodyParser from "body-parser";
import posts from "./model/posts.js";

const app = express();

const PORT = 3000;

app.get("/all", (req, resp) => {
    resp.json(JSON.stringify(posts.getAll()));
});

app.post("/new", bodyParser.json(), (req, resp) => {
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    resp.send("Post added");
});
    
app.listen(PORT, () => {
    console.log("Server online on port", PORT);
})