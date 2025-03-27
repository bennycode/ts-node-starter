const config = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev-database.db3',
    },
    useNullAsDefault: true,
  },
};

export default config;
