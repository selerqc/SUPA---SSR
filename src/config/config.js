import 'dotenv/config'


export default {
  PORT: process.env.PORT,
  HOST:process.env.HOST,
  SUPABASE: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_URL:process.env.SUPABASE_URL
  }
}