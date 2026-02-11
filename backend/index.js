import express, { response } from "express";
// import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for parsing request body from different domain,protocols, or ports
 // option 1
app.use(cors());
// option 2
// app.use(cors({
//     origin: "https://localhost:3000",
//     methods: ["GET","POST","PUT","DELETE"],
//     allowedHeaders: ["Content-Type"]
// }));

// Router for Book Routes
app.use("/books", booksRoute);


// app.get("/", (req, res) => {
//      console.log(req);
//      return res.status(234).send("Welcome to MERN Stack.");
// });


// For local running
// mongoose.connect(mongoDBURL)
// .then(()=>{
//     console.log("App connected to DB");
//     app.listen(PORT, ()=>{
//         console.log(`App is listening on port : ${PORT}`);
//     });
// })
// .catch((error)=>{
//     console.log(error);
// });

// For Render deployment
const PORT = process.env.PORT || 5555
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("App connected to DB");
    app.listen(PORT, ()=>{
        console.log(`App is listening on port : ${PORT}`);
    });
})
.catch((error)=>{
    console.log(error);
});
