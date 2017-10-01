CREATE TABLE cars (
  id SERIAL4 PRIMARY KEY,
  make VARCHAR(400),
  year INTEGER,
  image_url VARCHAR(800)
);

INSERT INTO cars (make, year, image_url) VALUES ('Lamborghini Huracan', 2017, 'http://s3.caradvice.com.au/wp-content/uploads/2015/05/LAMBORGHINI_HURACAN2.jpg');

ALTER TABLE cars ADD times_seen INTEGER;
