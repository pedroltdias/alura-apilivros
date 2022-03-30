import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.cnt6f.mongodb.net/alura-node?");
//mongodb+srv://pedrodias:<password>@cluster0.cbmsw.mongodb.net/nomeDatabase?

let db = mongoose.connection;

export default db;
