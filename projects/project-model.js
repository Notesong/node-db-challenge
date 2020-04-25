const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then((ids) => {
      const id = ids[0];
      return findById(id);
    });
}
