import supabase from "#config/init.js";

const protectRoute = async (req, res, next) => {
  const token = req.cookies?.access_token ||
    (req.headers.authorization?.split(' ')[1]);

  if (!token) {
    return res.redirect('/signIn');
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      res.clearCookie('access_token');
      res.clearCookie('refresh_token');
      return res.redirect('/signIn');
    }

    req.user = user;
    next();

  } catch (error) {
    return res.render('error', {
      message: 'Internal server error during authentication'
    });
  }
};

export default protectRoute;
