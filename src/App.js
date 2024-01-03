
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackText from "./components/FeedbackText";


function App(){
    
  const[feedback,setFeedBack]=useState(FeedbackData)   
  
  const deleteFeedBack = (id)=>{

    if(window.confirm('Are you sure you wanna delete this feedback?')){

      setFeedBack(feedback.filter((item)=> item.id !== id))
    }


  }

  const addFeedBack = (newFeedBack)=>{

    console.log(newFeedBack)

  }
    return ( 
        
          <div className="container">
            <Header />
            
            <div className="container">
            <FeedbackText handleAdd={addFeedBack}/>  
            <FeedBackStats  feedback={feedback}/>
            <FeedbackList feedback={feedback} deleteFeedBack={deleteFeedBack}/>
            </div>
            
            
          </div>

        
    )
    
}
export default App