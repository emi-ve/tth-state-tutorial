import React, { useState } from "react";
import Star from "./Star";
const StarRating = () => {
  // Initialize a 'courseRating' state
  const [courseRating, setCourseRating] = useState(0);

  // Write a function that returns 5 Star components

  const displayStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      stars.push(
        <Star
          key={i}
          setRating={() => {
            handleCourseRating(i + 1);
          }}
        />
      );
    }

    return <p>{stars}</p>;
  };

  // Write an event handler that updates the courseRating state.

  const handleCourseRating = (rating) => {
    setCourseRating(rating);
  };

  console.log(typeof courseRating);

  // Pass the function to a Star component via props

  return (
    <ul className="course--stars" onClick={handleCourseRating}>
      {displayStars()}
    </ul>
  );
};

export default StarRating;
