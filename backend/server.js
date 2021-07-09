require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();

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
app.get("/api/v1/restaurant/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds"
    }
  });
});

// create restaurant
app.post("/api/v1/restaurants", (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mcdonalds"
    }
  });
});

// update restaurant

app.put("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
    data: {
      restaurant: "mcdonalds"
    }
  });
});

// delete restaurant

app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success"
  });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Server run on ${PORT} `)
})