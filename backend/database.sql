-- Supabase Schema Setup for BoldVizByte

-- 1. Leads Table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    "formType" TEXT NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    "serviceOrRole" TEXT NOT NULL,
    message TEXT,
    details JSONB,
    "pageUrl" TEXT,
    "fileName" TEXT,
    "mimeType" TEXT,
    "fileData"TEXT, 
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Services Table
CREATE TABLE IF NOT EXISTS public.services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    "bestFor" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Careers Table
CREATE TABLE IF NOT EXISTS public.careers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('Internship', 'Full-Time', 'Part-Time', 'Contract')),
    loc TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Note: Because the Node.js backend uses the Service Role Key, 
-- Row Level Security (RLS) policies are bypassed. If you ever query 
-- directly from the frontend, you must enable RLS and write policies.
