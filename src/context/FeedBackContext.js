import {useState,createContext} from 'react'


const FeedBackContext= createContext()


export const FeedBackProvider = ({children}) => {

const[feedback,setFeedBack]= useState([{

    id:1,
    rating:10,
    text:'This is a feedback from context'


}])
return <FeedBackContext.Provider value={{
    
    feedback,
    
    }}> 



{children}

</FeedBackContext.Provider>
}
export default FeedBackContext

