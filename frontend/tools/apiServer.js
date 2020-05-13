const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults({
  static: "node_modules/json-server/dist",
});

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function (req, res, next) {
  setTimeout(next, 0);
});

server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createAt = Date.now();
  }
  next();
});

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

server.post("/users/", function (req, res, next) {
  //const error = validateCourse(req.body);
  //if (error) {
  // res.status(400).send(error);
  //} else {
  //req.body.slug = createSlug(req.body.title); // Generate a slug for new courses.
  next();
});
