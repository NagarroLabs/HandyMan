require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const HttpError = require('./models/http-error');
const handyManRouter = require('./routes/handyMan-routes');
const usersRouter = require('./routes/users-routes');
const jobsRouter = require('./routes/jobs-routes');
const reviewsRouter = require('./routes/reviews-routes');

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/users/', usersRouter);
app.use(handyManRouter);
app.use(jobsRouter);
app.use(reviewsRouter);

app.use((req, res, next) => {
  throw new HttpError('Sorry, could not find this route.', 404);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred.' });
});

mongoose
  .connect(
    `mongodb+srv://handy:${process.env.DB_PASS}@handyman-odppl.mongodb.net/handyManDB?retryWrites=true&w=majority
    `,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connection estabilished with DB');
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}\n`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
