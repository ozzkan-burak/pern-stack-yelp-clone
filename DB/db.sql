-- for help             \?

-- list database        \l
-- Create Database      create database database_name
-- Connect database     \c database_name
-- list all tables      \d

-- add new column       ALTER TABLE dbname ADD COLUMN columnName INT/boolean/varchar
-- delete column        ALTER TABLE dbname ADD COLUMN columnName 

-- delete table         DROP TABLE tableName

-- delete DB            DROP DATABASE dbname

-- all data             select * from dbname

-- colum feature        select columName from dbnema

-- search specific      select * from tablename where id=id
CREATE TABLE products (
    id bigserial primary key,
    product_name varchar(20) NOT NULL,
    price INT NOT NULL,
    onSale boolean NULL
);

CREATE TABLE restaurants (
    id bigserial NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range  INT NULL check(price_range >= 1 and price_range <= 5)
);

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL check(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (name, review, rating) values('carl', 'restaurant was awesome', 5);