
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import FeedbackText from "./components/FeedbackText";
import AboutLinkIcon from "./components/AboutLinkIcon";
import Post from "./components/Post";
import { FeedBackProvider } from "./context/FeedBackContext";

import {BrowserRouter as Router, Route,Routes,} from "react-router-dom";



import AboutPage from "./pages/AboutPage";


function App(){
    
  
  
  

  
    return ( 
        <FeedBackProvider>
          <Router>
            
          
            <Header />
            
            <div className="container">
              <Routes>
              <Route exact path="/" element={
                <>
                <FeedbackText />  
                <FeedBackStats />
                <FeedbackList />
                </>


              }>
            
            
              </Route>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/post/*" element={<Post/>}/>
              </Routes>
              

              
            </div>
            <AboutLinkIcon />
            
          
            
          </Router >
          </FeedBackProvider>
    )
    
}
export default App