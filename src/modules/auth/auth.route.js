import express from 'express';
import { signUp, signIn, signOut, getSession,signInWithGoogle } from '#auth/auth.controller.js';

const router = express.Router();

router.post('/signUp', signUp);
router.post('/signIn', signIn);
router.post('/signOut', signOut);
router.get('/session', getSession);
router.get('/signIn/google', signInWithGoogle);

export default router;