import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContext';

export const UpdateRestaurant = () => {
  const {id} = useParams();
  const {restaurants} = useContext(RestaurantsContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(()=> {
    const fectData = async () => {
      const response = await RestaurantFinder.get(`/${id}`);
      // setName(response.data.data.restaurant.name);
      // setLocation(response.data.data.restaurant.location);
      // setPriceRange(response.data.data.restaurant.price_range);
      console.log(response.data.data);
    }

    fectData();
  },[])
 
  return (
    <div>
      <form action={""}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" value={name} onChange={e => setName(e.target.value)} className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input id="location" value={location} onChange={e => setLocation(e.target.value)} className="form-control" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input id="price_range" value={priceRange} onChange={e => setPriceRange(e.target.value)} className="form-control" type="number" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
