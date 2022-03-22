import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedrodias:733582@cluster0.cbmsw.mongodb.net/Cluster0?");
//mongodb+srv://pedrodias:<password>@cluster0.cbmsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

let db = mongoose.connection;

export default db;
