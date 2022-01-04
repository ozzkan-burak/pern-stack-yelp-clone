import React from 'react'
import StarRatings from './StarRatings'

const Reviews = (reviews) => {
  console.log(reviews)
  return (
    <div className="row row-cols-3 mb-2">
      {
        reviews.length > 0 ? reviews?.map(review => (
          <div className="card text-white bg-primary mb-3 mr-4" style={{ maxWidth: "30%" }}>
            <div className="card-header d-flex justify-content-between">
              <span>{review.name}</span>
              <span>
                <StarRatings rating={review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        ))
          :
          <div class="alert alert-warning" role="alert">
            No reviews yet
          </div>
      }
    </div>
  )
}

export default Reviews
