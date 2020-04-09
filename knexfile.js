// Update with your config settings.
const { connectionString } = require('./.env')
module.exports = {
  client: 'pg',
  connection: connectionString,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
