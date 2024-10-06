let users = [];
let nextId = 1;

const create = (userData) => {
  const newUser = { id: nextId++, ...userData };
  users.push(newUser);
  return newUser;
};

const findByUsername = (username) => {
  return users.find(user => user.username === username);
};

const findById = (id) => {
  return users.find(user => user.id === id);
};

module.exports = {
  create,
  findByUsername,
  findById
};
