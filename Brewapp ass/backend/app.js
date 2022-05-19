import express from  "express";
import mongoose  from "mongoose";
import router from "./routes/showsRoute";
import cors from "cors";

const app= express();
app.use(cors());
app.use(express.json());
app.use("/api/show",router);

const db = "mongodb+srv://dbkomal:komalmongo@cluster0.6ppfa.mongodb.net/Blog?retryWrites=true&w=majority";

    mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(5001))
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));



//komalmongo
