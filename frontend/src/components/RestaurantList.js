import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContext';


const RestaurantList = (props) => {

  const { restaurants, setRestaurants } = useContext(RestaurantsContext)

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurant)
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, [])
  console.log('rest',restaurants)
  return (
    <div className="list-group">
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant, index) => {
          console.log('MAP',restaurant)
            return (
              <tr key={index}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'$'.repeat(restaurant.price_range)}</td>
                <td>Reviews</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-warning">Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantList
