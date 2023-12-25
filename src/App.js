
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App(){
    
  const[feedback,setFeedBack]=useState(FeedbackData)   
  
    return ( 
        
          <div className="container">
            <Header />
            <div className="container">

            <FeedbackList feedback={feedback}/>
            </div>
            
            
          </div>

        
    )
    
}
export default App