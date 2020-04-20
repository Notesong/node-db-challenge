const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("../projects/project-router.js");
const ResourceRouter = require("../resources/resource-router.js");
const TaskRouter = require("../tasks/task-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
