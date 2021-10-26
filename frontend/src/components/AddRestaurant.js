import React, { useContext, useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContext';


const AddRestaurant = () => {

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range")

  const {addRestaurants} = useContext(RestaurantsContext)

  // const onInputChange = (e) => {
  //   e.preventDefault();
  //   setRestaurant({...restaurant, [e.target.name]: e.target.value})
  // }

  const handleSubmit = async (e) => {
    //debugger;
    e.preventDefault();
    try {
     const response = await RestaurantFinder.post('/', {
        name,
        location,
        price_range: priceRange
      });

      addRestaurants(response.data.data);
    } catch (err) {

    }

  }

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="col add-restaurant-input">
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
          </div>
          <div className="col add-restaurant-input">
            <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" placeholder="location" />
          </div>
          <div className="col add-restaurant-input">
            <select 
              value={priceRange}
              name="priceRange"
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2 form-control">
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <div className="add-restaurant-input">
            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
