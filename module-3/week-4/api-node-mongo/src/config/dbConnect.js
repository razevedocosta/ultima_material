import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin@cluster0.5dzdy1z.mongodb.net/ultima-node");

let db = mongoose.connection;

export default db;