CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('contact-leads', 'career-applications')),
  created_at TEXT NOT NULL,
  payload TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS leads_type_created_at
  ON leads (type, created_at DESC);
