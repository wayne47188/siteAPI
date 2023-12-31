/* express.js */
import express from 'express';
import config from './config';
import index from '../server/routes/index.route';

const app = express();

/* GET home page. */
app.get('/', (req, res) => {
  res.send(`server started on  port http://192.168.0.182:${config.port} (${config.env})`);
});

app.use('/api', index);

export default app;