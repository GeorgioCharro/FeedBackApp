
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";

function App(){
    
  const[feedback,setFeedBack]=useState(FeedbackData)   
  
  const deleteFeedBack = (id)=>{

    if(window.confirm('Are you sure you wanna delete this feedback?')){

      setFeedBack(feedback.filter((item)=> item.id !== id))
    }


  }
    return ( 
        
          <div className="container">
            <Header />
            
            <div className="container">
            <FeedBackStats  feedback={feedback}/>
            <FeedbackList feedback={feedback} deleteFeedBack={deleteFeedBack}/>
            </div>
            
            
          </div>

        
    )
    
}
export default App