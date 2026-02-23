-- 用户表
CREATE TABLE IF NOT EXISTS users (
  id          TEXT PRIMARY KEY,
  email       TEXT UNIQUE NOT NULL,
  name        TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  created_at  TEXT NOT NULL
);

-- 课程归属表（课程内容仍存在 R2）
CREATE TABLE IF NOT EXISTS course_owners (
  course_id   TEXT PRIMARY KEY,   -- 对应 R2 key（URL 编码后去掉 .json）
  owner_id    TEXT NOT NULL,
  owner_email TEXT NOT NULL,
  owner_name  TEXT NOT NULL,
  is_public   INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT NOT NULL,
  FOREIGN KEY (owner_id) REFERENCES users(id)
);
