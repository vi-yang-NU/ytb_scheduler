CREATE DATABASE IF NOT EXISTS mvp_db;

USE mvp_db;

CREATE TABLE IF NOT EXISTS video_queue (
    video_id INT AUTO_INCREMENT PRIMARY KEY,
    upload_date DATE,
    video_description TEXT,
    video_data BLOB
);

CREATE TABLE IF NOT EXISTS video_thumbnail (
    video_thumbnail_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    attachment BLOB,
    FOREIGN KEY (video_id) REFERENCES video_queue(video_id)
);

CREATE TABLE IF NOT EXISTS video_title (
    video_title_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    video_title TEXT,
    FOREIGN KEY (video_id) REFERENCES video_queue(video_id)
);

CREATE TABLE IF NOT EXISTS performance (
    performance_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    video_thumbnail_id INT,
    video_title_id INT,
    date TIMESTAMP,
    CTR FLOAT,
    watch_time FLOAT,
    FOREIGN KEY (video_id) REFERENCES video_queue(video_id),
    FOREIGN KEY (video_thumbnail_id) REFERENCES video_thumbnail(video_thumbnail_id),
    FOREIGN KEY (video_title_id) REFERENCES video_title(video_title_id)
);

CREATE TABLE IF NOT EXISTS hourly_performance (
    hourly_id INT AUTO_INCREMENT PRIMARY KEY,
    performance_id INT,
    hour INT,
    CTR FLOAT,
    watch_time FLOAT,
    FOREIGN KEY (performance_id) REFERENCES performance(performance_id)
);

CREATE TABLE IF NOT EXISTS video_thumbnail (
    video_thumbnail_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    attachment BLOB,
    FOREIGN KEY (video_id) REFERENCES video_queue(video_id)
);

CREATE TABLE IF NOT EXISTS video_title (
    video_title_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    video_title TEXT,
    FOREIGN KEY (video_id) REFERENCES video_queue(video_id)
);

CREATE TABLE IF NOT EXISTS performance (
    performance_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT,
    video_thumbnail_id INT,
    video_title_id INT,
    date TIMESTAMP,
    CTR FLOAT,
    watch_time FLOAT,
    FOREIGN KEY (video_id) REFERENCES video_queue(video_id),
    FOREIGN KEY (video_thumbnail_id) REFERENCES video_thumbnail(video_thumbnail_id),
    FOREIGN KEY (video_title_id) REFERENCES video_title(video_title_id)
);

CREATE TABLE IF NOT EXISTS hourly_performance (
    hourly_id INT AUTO_INCREMENT PRIMARY KEY,
    performance_id INT,
    hour INT,
    CTR FLOAT,
    watch_time FLOAT,
    FOREIGN KEY (performance_id) REFERENCES performance(performance_id)
);
