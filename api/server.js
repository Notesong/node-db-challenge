const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("../projects/project-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;