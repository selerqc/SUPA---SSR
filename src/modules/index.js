import express from 'express';
const router = express.Router();


import AuthRoute from "#modules/auth/auth.route.js";

router.get('/', (req, res) => { res.render('home') })
router.get('/pug/signIn', (req, res) => { res.render('signIn') })
router.get('/pug/signUp', (req, res) => { res.render('signUp') })

router.use('/auth', AuthRoute)

export default router
