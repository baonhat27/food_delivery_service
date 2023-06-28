const config = {
  port: process.env.PORT,
  mongodb: {
    username: process.env.MONGODB_USERNAME,
    pasword: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    dbName: process.env.MONGODB_NAME,
  },
};
