const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks").where({ id }).first();
}

function add(task) {
  return db("tasks").insert(task);
}
