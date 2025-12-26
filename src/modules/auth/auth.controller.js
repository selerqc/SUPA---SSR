import AuthService from '#auth/auth.service.js';

const authService = new AuthService();

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authService.signUp(email, password);
    res.render('signIn')
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authService.signIn(email, password);
    res.render('dashboard', {
      data
    })
  } catch (error) {
    if (error.__isAuthError) {
      res.render('error', {
        message: 'Account Not Found. Please Sign Up.'
      })
    } else {
      res.status(500).json({
        message: error.message
      });
    }
  }
};

export const signOut = async (req, res) => {
  try {
    await authService.signOut();
    res.redirect('/api/pug/signIn');
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

export const getSession = async (req, res) => {
  try {
    const data = await authService.getSession();
    res.status(200).json({
      data
    });
  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};

export const signInWithGoogle = async (req, res) => {
  try {
    const data = await authService.signInWithGoogle();
    res.redirect(data)
  } catch (error) {
    res.status(401).json({
      message: error.message
    });
  }
};

