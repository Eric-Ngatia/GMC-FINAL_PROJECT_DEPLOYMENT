import express from "express";
import Database from './src/BD/Database.js';
import  { router } from './routes/Auth.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 4000;
let db = new Database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))


var corsOption ={
    origin: 'http://localhost:3000',
    credentials  : true,
    optionsSuccessStatus: 200,
    methods: ["POST" , "GET" ]
}
app.use(cors(corsOption))
app.use(router);



app.listen(PORT,(err)=>
    console.log(`Le serveur tourne sur le port 127.0.0.1: ${PORT}`)
)