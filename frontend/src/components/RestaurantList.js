import React, { useEffect, useContext } from 'react';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContext';


const RestaurantList = () => {

  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get("/");
        setRestaurants(response.data.data.restaurants)

      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try{

      const response = await RestaurantFinder.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    } catch (err) {
      console.error(err)
    }
  }

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

            return (
              <tr key={index}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'$'.repeat(restaurant.price_range)}</td>
                <td>Reviews</td>
                <td><button className="btn btn-warning">Update</button></td>
                <td><button className="btn btn-warning" onClick={()=> handleDelete(restaurant.id)} >Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
};

export default RestaurantList
