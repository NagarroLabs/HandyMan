require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const HttpError = require("./models/http-error");
const handyManRouter = require("./routes/handyMan-routes");
const usersRouter = require("./routes/users-routes");
const jobsRouter = require("./routes/jobs-routes");
const reviewsRouter = require("./routes/reviews-routes");

const app = express();
const PORT = process.env.PORT || 3001;

/* In order to allow certain headers and HTTP verbs
 (can be deleted if React App & our API is on the same server) */

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/users/", usersRouter);
app.use("/api/handymen/", handyManRouter);
app.use("/api/jobs/", jobsRouter);
app.use(reviewsRouter);

app.use((req, res, next) => {
  throw new HttpError("Sorry, could not find this route.", 404);
});

// Error handling middleware

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred." });
});

/* Setting up connection to the Mongo Cluster and only then
   start listening for incoming request */

mongoose
  .connect(
    `mongodb+srv://handy:${process.env.DB_PASS}@handyman-odppl.mongodb.net/handyManDB?retryWrites=true&w=majority
    `,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connection estabilished with DB");
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}\n`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
