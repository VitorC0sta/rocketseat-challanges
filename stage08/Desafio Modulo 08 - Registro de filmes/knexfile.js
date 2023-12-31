const path = require("path");


module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname,"src", "database", "vitaoflix.db")
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    } 
  }
};
