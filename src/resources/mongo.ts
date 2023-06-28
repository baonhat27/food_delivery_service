import { connect, connection } from 'mongoose';

const mongoDBConfig = config.mongodb;

const userNamePwd = mongoDBConfig.username
  ? `${mongoDBConfig.username}:${mongoDBConfig.pasword}@`
  : '';

let mongodbUrl = `mongodb://${userNamePwd}${mongoDBConfig.host}/${mongoDBConfig.dbName}?authSource=admin&retryWrites=true`;
