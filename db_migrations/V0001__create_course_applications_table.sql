CREATE TABLE IF NOT EXISTS course_applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    start_date VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

CREATE INDEX idx_applications_created_at ON course_applications(created_at DESC);
CREATE INDEX idx_applications_status ON course_applications(status);