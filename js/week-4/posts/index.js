import express from "express";
import bodyParser from "body-parser";

const app = express();

const PORT = 3000;

let posts = [
    {
        id: "1",
        title: "Primeiro post",
        description: "Primeira descrição"
    },
];

app.get("/all", (req, resp) => {
    resp.json(JSON.stringify(posts));
});

app.post("/new", bodyParser.json(), (req, resp) => {
    let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    posts.push({
        "id": id, 
        "title": title, 
        "description": description
    })

    resp.send("Post added");
});
    
app.listen(PORT, () => {
    console.log("Server online on port", PORT);
})

function generateID() {
    return Math.random().toString(36).substring(2,9);
}