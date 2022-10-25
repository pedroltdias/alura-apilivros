import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:123@alura.cnt6f.mongodb.net/alura-node?");
//mongodb+srv://pedrodias:<password>@cluster0.cbmsw.mongodb.net/nomeDatabase?
//mongodb+srv://alura:123@alura.cnt6f.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://alura:123@alura.cnt6f.mongodb.net/alura-node?

let db = mongoose.connection;

export default db;
