import express from "express";
import { join } from "path";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || "3000";
import connectDB from "./db/connectdb.js";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";

//Database connection
connectDB(DATABASE_URL);

app.use(express.urlencoded({ extended: false }));

// Static files
app.use("/student", express.static(join(process.cwd(), "public")));

// set template engine
app.set("view engine", "ejs");

//load routes
app.use("/student", web);

app.listen(port, () => {
  console.log("Server is running");
});
