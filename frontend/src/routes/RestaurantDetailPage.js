import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantContext';
import RestaurantFinder from '../apis/RestaurantFinder';

//
import  StarRating from '../components/StarRatings';

const RestaurantDetailPage = () => {

  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);

      } catch (error) {

        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && <StarRating rating={2.7} />}
    </div>
  )
}

export default RestaurantDetailPage
