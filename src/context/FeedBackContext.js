import {useState,createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext= createContext()


export const FeedBackProvider = ({children}) => {

const[feedback,setFeedBack]= useState([{

    id:1,
    rating:10,
    text:'This is a feedback from context'


},
{

    id:2,
    rating:8,
    text:'This is a feedback from context'


},
{

    id:3,
    rating:9,
    text:'This is a feedback from context'


}

])

const [editFeedBack,setEditFeedBack]= useState({
    item: {},
    edit:false,


    
})

const FeedBackEdit = (item) => {

    setEditFeedBack({

        item , 
        edit:true,
    })



}

const FeedBackUpdate = (id,updateItem)=>{
    
    setFeedBack(feedback.map((item)=>(item.id === id? {...item,...updateItem}:item)))


}
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
return <FeedBackContext.Provider value={{
    
    feedback,
    editFeedBack,
    deleteFeedBack,
    addFeedBack,
    FeedBackEdit,
    FeedBackUpdate,
    }}> 



{children}

</FeedBackContext.Provider>
}
export default FeedBackContext

