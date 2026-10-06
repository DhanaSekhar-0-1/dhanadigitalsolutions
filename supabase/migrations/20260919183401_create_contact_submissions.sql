/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter's name
  - `business` (text, nullable) — company or business name
  - `phone` (text, not null) — contact phone number
  - `email` (text, not null) — contact email
  - `service_needed` (text, nullable) — what the visitor needs help with
  - `budget_range` (text, nullable) — selected budget tier
  - `timeline` (text, nullable) — selected timeline
  - `description` (text, nullable) — free-text project description
  - `created_at` (timestamptz, default now)
2. Security
- Enable RLS on `contact_submissions`.
- Allow anon + authenticated INSERT only (public visitors submit forms).
- No SELECT/UPDATE/DELETE from the anon key — only the dashboard owner reads submissions server-side.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text,
  phone text NOT NULL,
  email text NOT NULL,
  service_needed text,
  budget_range text,
  timeline text,
  description text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_submissions" ON contact_submissions;
CREATE POLICY "anon_insert_contact_submissions" ON contact_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);