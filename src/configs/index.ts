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
    protocol: process.env.MONGODB_PROTOCOL,
    username: process.env.MONGODB_USERNAME,
    pasword: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    replicaSet: process.env.MONGODB_REPLICA_SET,
    dbName: process.env.MONGODB_NAME,
    uri: process.env.MONGODB_URI,
  },

  secret: {
    authenSecretKey: process.env.SECRET_KEY,
  },
};
