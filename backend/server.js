require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

  try {
    const results = await db.query('select * from restaurants')

    console.log(results);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      }

    });
  } catch (err) {
    console.error(err)
  }
});

//get restaurant detail
app.get("/api/v1/restaurants/:id", async (req, res) => {
  console.log('TEST YAZDIR')

  try {
    const result = await db.query("select * from restaurants where id= $1", [req.params.id]);

    console.log(result.rows[0]);

    res.status(200).json({
    status: "success",
    data: {
      restaurant: result.rows[0]
    }
  });
  } catch (err){
    console.log(err)
  }

  
  
});

// create restaurant
app.post("/api/v1/restaurants", async (req, res) => {

  try {
    const result = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", 
      [req.body.name, req.body.location, req.body.price_range]
      );



    res.status(201).json({
      status: "success",
      data: {
        restaurant: result.rows[0]
      }
    });

  } catch(err) {
    console.log(err)
  }
});

// update restaurant

app.put("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const result = await db.query(
      "UPDATE restaurants SET name= $1, location= $2, price_range= $3 where id= $4 returning *",
      [
        req.body.name,
        req.body.location,
        req.body.price_range,
        req.params.id
      ]
      );
      res.status(200).json({
        status: "success",
        data: {
          restaurant: result.rows[0]
        }
      });
  } catch (err){

  }

});

// delete restaurant

app.delete("/api/v1/restaurants/:id", async (req, res) => {

  try {
    const result = await db.query('DELETE from restaurants where id=$1', [req.params.id]);

    res.status(204).json({
      status: "success"
    });
  } catch (err){
    console.log(err);
  }
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server run on ${PORT} `)
})