import React from 'react'

const StarRatings = ({rating}) => {
  
  const stars = [];

  for (let i = 1; i < 6; i++) {
    if (i <= rating) {
      stars.push(<i className="fas fa-star text-warning" key={i}></i>)
    } else if( i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i className="fas fa-star-half-alt text-warning" key={i}></i>)
    } else {
      stars.push(<i className="far fa-star text-warning" key={i}></i>)
    }   
  }
  
  return (
    <>{stars}</>
  )
}

export default StarRatings
