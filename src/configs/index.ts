import path from 'path';
import dotenv from 'dotenv';

const pathEnv = path.join(
  __dirname,
  `../../.env.${process.env.NODE_ENV || 'dev'}`
);

dotenv.config({ path: pathEnv });

export default {
  port: process.env.PORT || 8000,
  mongodb: {
    username: process.env.MONGODB_USERNAME,
    pasword: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    dbName: process.env.MONGODB_NAME,
  },

  secret: {
    authenSecretKey: process.env.SECRET_KEY,
  },
};
