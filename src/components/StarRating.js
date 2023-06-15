import React, { useState } from "react";
import Star from "./Star";
const StarRating = () => {
  // Initialize a 'courseRating' state
  const [courseRating, setCourseRating] = useState(0);

  // Write a function that returns 5 Star components

  const displayStars = () => {
    let stars = [];
    const maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          isSelected={courseRating > i}
          setRating={() => handleSetRating(i + 1)}
          key={i}
        />
      );
    }
    return stars;
  };

  // Write an event handler that updates the courseRating state.

  const handleSetRating = (rating) => {
    if (courseRating === rating) {
      setCourseRating(0);
    } else {
      setCourseRating(rating);
    }
  };

  console.log(courseRating);

  // Pass the function to a Star component via props

  return <ul className="course--stars">{displayStars()}</ul>;
};

export default StarRating;
