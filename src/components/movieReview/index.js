import React from 'react';

const MovieReview = ({review}) => (

  <>
    <p>
      Review By:
      {review.author}
    </p>
    <p>
      {review.content}
      {' '}
    </p>
  </>
);
export default MovieReview;