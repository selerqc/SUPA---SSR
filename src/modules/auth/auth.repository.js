import supabase from "#config/init.js";

export default class AuthRepository {
  async signUp(email, password) {
    return await supabase.auth.signUp({ email, password });
  }

  async signIn(email, password) {
    return await supabase.auth.signInWithPassword({ email, password });
  }

  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google', options: {
        redirectTo: 'https://crsemjjmbxxkezjumgxm.supabase.co/auth/v1/callback',
      },
    })
    if (data.url) {
      return data.url
    }
    return { data, error }
  }

  async signOut() {
    return await supabase.auth.signOut();
  }

  async getSession() {
    return await supabase.auth.getSession();
  }
}