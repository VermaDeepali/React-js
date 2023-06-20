const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

dotenv.config();

try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    console.log("MongoDB connected...");
} catch (error) {
    handleError(error);
}

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(8080, () => {
    console.log("Server is running at port 8080");
})