import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from 'api';
import configs from 'configs';
import connectMongo from 'resources/mongo';

const app = express();

function initializeMiddlewares() {
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(cookieParser());
}

export async function listen() {
  await connectMongo();

  app.listen(configs.port, () => {
    console.log(`👽 App listening on the port ${configs.port}`);
  });
}

initializeMiddlewares();
app.use('/fds', router);
