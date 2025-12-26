import AuthRepository from '#auth/auth.repository.js';

export default class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
  }

  async signUp(email, password) {
    const { data, error } = await this.authRepository.signUp(email, password);
    if (error) throw error;
    return data;
  }

  async signIn(email, password) {
    const { data, error } = await this.authRepository.signIn(email, password);
    if (error) throw error;
    return data;
  }

  async signInWithGoogle(email, password) {
    const data = await this.authRepository.signInWithGoogle(email, password);
    return data;
  }

  async signOut(token) {
    if (token) {
      const { data: { user }, error: getUserError } = await this.authRepository.getUser(token);

      if (user) {
        const { error } = await this.authRepository.signOut();
        if (error) throw error;
      }
    } else {
      const { error } = await this.authRepository.signOut();
      if (error) throw error;
    }
  }

  async getSession(token) {
    if (token) {
      const { data, error } = await this.authRepository.getUser(token);
      if (error) throw error;
      return data;
    }
    const { data, error } = await this.authRepository.getSession();
    if (error) throw error;
    return data;
  }


}