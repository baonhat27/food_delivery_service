import config from 'configs';
import mongoose, { connect, connection, set } from 'mongoose';

const mongoDBConfig = config.mongodb;

const userNamePwd = mongoDBConfig.username
  ? `${mongoDBConfig.username}:${mongoDBConfig.pasword}`
  : '';

let mongodbUrl = `mongodb+srv://${userNamePwd}@${mongoDBConfig.host}/${mongoDBConfig.dbName}?retryWrites=true&w=majority`;

export default async () => {
  try {
    set('strictQuery', false);
    await connect(mongodbUrl, { autoIndex: true, autoCreate: true });
    console.log('Connect MongoDB successfully');
  } catch (e) {
    console.log('Connection Error', e);
    process.exit(1);
  }
};
