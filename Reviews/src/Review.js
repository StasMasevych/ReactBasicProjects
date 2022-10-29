import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  //if come to the end of array - display first item
  //if come to the beginning of array - dispaly last item
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1
    }
    return number;
  }

  const prevPersonHandler = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }

  const nextPersonHandler = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }
  //we need to have random number between 0 and 3 (indexes)
  const randomPersonHandler = () => {
    let randomNumber = Math.floor(Math.random() * people.length); //4
  //if random num equal to my index then just add one
    if (randomNumber === index) {
      randomNumber = index + 1
    }

    setIndex(checkNumber(randomNumber))
  }

  

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"/>
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPersonHandler} className="prev-btn">
          <FaChevronLeft/>
        </button>
        <button onClick={nextPersonHandler} className="next-btn">
          <FaChevronRight/>
        </button>
      </div>
      <button onClick={randomPersonHandler} className="random-btn">
          Random review
        </button>
    </article>
  )
};

export default Review;
