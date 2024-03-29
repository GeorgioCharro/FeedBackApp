import {useContext}from "react";
import FeedBackContext from "../context/FeedBackContext";

function FeedBackStats() {
  const {feedback} = useContext(FeedBackContext)

    let average = feedback.reduce((acc,curr)=>{

        return acc + curr.rating / feedback.length;
    },0);
    
    average = average.toFixed(1).replace(/\.0$/, '');
  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0:average}</h4>
    </div>
  )
}        

export default FeedBackStats
