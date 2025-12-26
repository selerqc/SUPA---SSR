import express from 'express';
const router = express.Router();

import AuthRoute from "#modules/auth/auth.route.js";

router.use('/auth', AuthRoute)

export default router
