import express from 'express';
const router = express.Router();


import AuthRoute from "#modules/auth/auth.route.js";
import { pugRoutes } from "#utils/apiRoutes.js";


router.get(pugRoutes.signIn, (req, res) => { res.render('signIn') })
router.get(pugRoutes.signUp, (req, res) => { res.render('signUp') })
router.get(pugRoutes.signInWithGoogle, (req, res) => { res.render('signInWithGoogle') })
router.get(pugRoutes.getSession, (req, res) => { res.render('getSession') })

router.use('/auth', AuthRoute)

export default router
