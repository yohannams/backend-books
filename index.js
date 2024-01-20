import express from "express";
import cors from "cors";
import BookRoute from "./routes/BookRoute.js";
import CategoryRoute from "./routes/CategoryRoute.js";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(BookRoute);
app.use(CategoryRoute);
app.use(UserRoute);

app.listen(5000, () => console.log("Server up and running..."));
