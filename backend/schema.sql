CREATE DATABASE IF NOT EXISTS pastpaperhub
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE pastpaperhub;

CREATE TABLE IF NOT EXISTS users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(80) NOT NULL,
  last_name VARCHAR(80) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('student', 'admin') NOT NULL DEFAULT 'student',
  account_type VARCHAR(40) NOT NULL DEFAULT 'Student',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS past_papers (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  education_level VARCHAR(80) NOT NULL,
  phase VARCHAR(100) NOT NULL,
  grade VARCHAR(20) NOT NULL,
  subject VARCHAR(120) NOT NULL,
  language_name VARCHAR(80) NULL,
  year SMALLINT UNSIGNED NOT NULL,
  term VARCHAR(40) NOT NULL,
  paper_type VARCHAR(60) NOT NULL,
  description TEXT NOT NULL,
  file_url VARCHAR(500) NULL,
  memo_url VARCHAR(500) NULL,
  memorandum_available BOOLEAN NOT NULL DEFAULT FALSE,
  uploaded_by INT UNSIGNED NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_papers_user FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_papers_lookup (grade, subject, year, term)
);

CREATE TABLE IF NOT EXISTS notifications (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT UNSIGNED NOT NULL,
  title VARCHAR(255) NOT NULL,
  message VARCHAR(500) NOT NULL,
  paper_id INT UNSIGNED NULL,
  is_read BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_notifications_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_notifications_paper FOREIGN KEY (paper_id) REFERENCES past_papers(id) ON DELETE SET NULL,
  INDEX idx_notifications_user (user_id, is_read, created_at)
);
