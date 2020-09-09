const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { urlencoded } = require("express");
const routes = require("./routes");
const passport = require("./authentication/passport");

const PORT = process.env.PROT || 8000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/passportpal",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "client", "build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// routes
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`server start listening on ${PORT} `);
});
