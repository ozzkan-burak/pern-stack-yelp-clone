CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INTEGER check (rating >= 1 and rating <= 5),
);