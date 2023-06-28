import router from 'api';
import express from 'express';

const app = express();

app.use('/fds', router);
const port = 8000;

app.listen(port, () => {
  console.log(`App listening on the port ${port}`);
});
