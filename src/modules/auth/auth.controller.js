import AuthService from '#auth/auth.service.js';

const authService = new AuthService();

export const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authService.signUp(email, password);
   res.render('signIn')
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await authService.signIn(email, password);
    res.send(data)
  } catch (error) {
    res.send(error.message)
  }
};

export const signOut = async (req, res) => {
  try {
    await authService.signOut();
    res.status(200).json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getSession = async (req, res) => {
  try {
    const data = await authService.getSession();
    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(401).json({
      success: false,
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
      success: false,
      message: error.message
    });
  }
};

