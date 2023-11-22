exports.up = knex => knex.schema.createView("user_view", view => {
  view.columns(["name", "email", "avatar"]);
  view.as(knex('users').select(["name", "email", "avatar"]));
});


exports.down = knex => knex.schema.dropView("user_view");
