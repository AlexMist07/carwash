import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://zyeeowpkcpkqjfbloaha.supabase.co';
const SUPABASE_KEY = 'sb_publishable_YOVPEaAWowYsI_ZOIUPjFQ_iG0wgEvj';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);