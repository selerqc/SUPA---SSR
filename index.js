import express from 'express'
import config from '#config/config.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'


import Router from './src/modules/index.js'

const app = express()

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', Router)

app.listen(config.PORT, config.HOST, () => {
  console.log(`http://${config.HOST}:${config.PORT}/api`);
})