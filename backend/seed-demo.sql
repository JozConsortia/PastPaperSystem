USE pastpaperhub;

INSERT INTO users (first_name, last_name, email, password_hash, role, account_type)
VALUES
  ('Demo', 'Student', 'demo.student@example.com', '$2b$12$6GkBN5HphafUMXETdThH4.zQ0FPkdEGwXa6oXJ0r2KZ2udFaKw8HK', 'student', 'Student'),
  ('Demo', 'Admin', 'demo.admin@example.com', '$2b$12$4.z6WnqkZxEtRkBXC8uuRuCyEpCcrSxMCP0RcOG6wjZZpfoRop7o6', 'admin', 'Admin')
ON DUPLICATE KEY UPDATE
  password_hash = VALUES(password_hash),
  role = VALUES(role),
  account_type = VALUES(account_type);

SELECT id, first_name, last_name, email, role, account_type
FROM users
WHERE email IN ('demo.student@example.com', 'demo.admin@example.com');
