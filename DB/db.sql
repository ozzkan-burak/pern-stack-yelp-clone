-- for help   \?

-- list database    \l
-- Create Database    create database database_name
-- Connect database   \c database_name
-- list all tables
CREATE TABLE products (
    id bigserial primary key,
    product_name varchar(20) NOT NULL,
    price INT NOT NULL,
    onSale boolean NULL
);