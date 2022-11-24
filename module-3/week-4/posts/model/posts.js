// exportar um objeto para ser usado
const posts = [
    {
        id: "1",
        title: "Primeiro post",
        description: "Primeira descrição"
    },
];

function getAll() {
    return this.posts;
}

function newPost(title, description) {
    this.posts.push({ id: generateID, title, description });
}

function generateID() {
    return Math.random().toString(36).substring(2,9);
}

export default {
    posts, getAll, newPost
}