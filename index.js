import express from 'express'
import config from '#config/config.js'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import Router from './src/modules/index.js'
import PugRouter from './src/modules/pug/pug.route.js'

const app = express()

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use(morgan('dev'));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(PugRouter)

app.use('/api', Router)

app.use((req, res, next) => {
  res.render('routeNotFound')
  next()
})

app.listen(config.PORT, config.HOST, () => {
  console.log(`http://${config.HOST}:${config.PORT}/signIn`);
})