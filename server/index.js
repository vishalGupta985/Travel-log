import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/user.js";
import entryRoute from "./routes/entry.js";
import cookieParser from "cookie-parser";
import cors from "cors"

import dbConnect from './config/database.js'

const app = express();
dotenv.config();


const PORT = process.env.PORT || 5500;


// db Connect
dbConnect();


app.get('/', (req, res) => { res.send('Hello from Express!') });

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use(helmet());


// app.use(cors({
//    origin: "http://localhost:3000",
//    credentials: true
// }))

app.use(cors());



app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/entries", entryRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});