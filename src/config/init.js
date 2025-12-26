import { createClient } from '@supabase/supabase-js'
import config from '#config/config.js'


const supabase = createClient(config.SUPABASE.SUPABASE_URL, config.SUPABASE.SUPABASE_KEY)

export default supabase