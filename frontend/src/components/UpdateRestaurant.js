import React, {useState, useEffect, useContext} from 'react'
import { useHistory, useParams } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantContext';

export const UpdateRestaurant = () => {
  const {id} = useParams();
  const history = useHistory();
  const {restaurants} = useContext(RestaurantsContext);

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(()=> {
    const fectData = async () => {

      const response = await RestaurantFinder.get(`/${id}`);
      const {name, location, price_range} = response.data.data.restaurant;
      setName(name);
      setLocation(location);
      setPriceRange(price_range);
    }

    fectData();
  },[]);

  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await RestaurantFinder.put(`/${id}`, {
      name,
      location,
      price_range: priceRange
    });
    history.push('/');
  };
 
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
        <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
