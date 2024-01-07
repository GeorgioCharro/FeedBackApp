
import { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackText from "./components/FeedbackText";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";


import { v4 as uuidv4 } from 'uuid';
import AboutPage from "./pages/AboutPage";


function App(){
    
  const[feedback,setFeedBack]=useState(FeedbackData)   
  
  const deleteFeedBack = (id)=>{

    if(window.confirm('Are you sure you wanna delete this feedback?')){

      setFeedBack(feedback.filter((item)=> item.id !== id))
    }


  }

  const addFeedBack = (newFeedBack)=>{
    newFeedBack.id = uuidv4();
    console.log(newFeedBack)
    setFeedBack([newFeedBack,...feedback]);

  }
    return ( 
          <Router>
            
          
            <Header />
            
            <div className="container">
              <Routes>
              <Route exact path="/" element={
                <>
                <FeedbackText handleAdd={addFeedBack}/>  
                <FeedBackStats  feedback={feedback}/>
                <FeedbackList feedback={feedback} deleteFeedBack={deleteFeedBack}/>
                </>


              }>
            
            
              </Route>
              <Route path="/about" element={<AboutPage/>}/>
              </Routes>
            </div>
            
            
          
            
          </Router >
    )
    
}
export default App