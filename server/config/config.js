module.exports = {
  development: {
    username: 'wfpgbykb',
    password: 'bOLhSuwZrlovWX9vEBTtzkERgHnUCVnq',
    database: 'wfpgbykb',
    host: 'baasu.db.elephantsql.com',
    dialect: 'postgres',
  },
  test: {
    username: 'admin',
    password: 'password1',
    database: 'MoreRecipes',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL_PRODUCTION',
    dialect: 'postgres',
  },
};
