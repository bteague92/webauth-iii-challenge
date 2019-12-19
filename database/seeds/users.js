
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: "B",
          password: "B",
          department: "deli"
        },
        {
          username: "A",
          password: "A",
          department: "tech"
        },
        {
          username: "C",
          password: "C",
          department: "sports"
        },
      ]);
    });
};
