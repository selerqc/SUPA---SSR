import express from 'express';
import { pugRoutes } from "#utils/apiRoutes.js";
import protectRoute from "../../middleware/auth.js";

const router = express.Router();

router.get(pugRoutes.signIn, (req, res) => { res.render('signIn') })
router.get(pugRoutes.signUp, (req, res) => { res.render('signUp') })
router.get(pugRoutes.signInWithGoogle, (req, res) => { res.render('signInWithGoogle') })
router.get(pugRoutes.getSession, (req, res) => { res.render('getSession') })
router.get(pugRoutes.dashboard, protectRoute, (req, res) => { res.render('dashboard', { user: req.user }) })

export default router;
