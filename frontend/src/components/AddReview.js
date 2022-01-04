import React, { useState } from 'react';

const AddReview = () => {
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('Rating');

  return (
    <div className="mb-2">
      <form action="">
        <div className="form-row">
          <div className='form-group col-8'>
            <label htmlFor="name">Name</label>
            <input type="text" value={name} onChange={e => setName(prevState => prevState = e.target.value)} className='form-control' id="name" placeholder='name'/>
          </div>
          <div className='form-group col-4'>
            <label htmlFor="rating">Rating</label>
            <select className='custom-select' value={rating} onChange={e => setRating(prevState => prevState = e.target.value)}  id="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className='form-group col-12'>
            <label htmlFor="Review">Review</label>
            <textarea className='form-control' value={reviewText} onChange={e => setReviewText(prevState => prevState = e.target.value)}  id="Review" rows="3"></textarea>
          </div>
          <button className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddReview;
