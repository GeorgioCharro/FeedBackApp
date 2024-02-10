import {useState,createContext, useEffect} from 'react'


const FeedBackContext= createContext()


export const FeedBackProvider = ({children}) => {
const[isLoading,setIsLoading]=useState(true)
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

const FeedBackUpdate = async (id,updateItem)=>{

    const response = await fetch(`feedback/${id}`,{

      method:'PUT', headers:{

        'Content-Type':'application/json',
      },
      body: JSON.stringify(updateItem)
    })
    const data = await response.json()
    setFeedBack(feedback.map((item)=>(item.id === id? {...item,...data}:item)))


}
const deleteFeedBack = async (id)=>{

    await fetch(`/feedback/${id}`, {method:'DELETE'})

    if(window.confirm('Are you sure you wanna delete this feedback?')){

      setFeedBack(feedback.filter((item)=> item.id !== id))
    }


  }

  const addFeedBack = async (newFeedBack)=>{
    const response = await fetch('/feedback',{

      method:'POST',headers:{

        'Content-Type':'application/json',
      },

      body: JSON.stringify(newFeedBack)
    })
    const data = response.json()
    
    
    setFeedBack([data,...feedback]);

  }

  const fetchFeedback = async () => {

    const response = await fetch('/feedback')

    const data = await response.json()
    setFeedBack(data)
    setIsLoading(false)
  }

  useEffect(()=> {

    fetchFeedback()

  },[])
return <FeedBackContext.Provider value={{
    
    feedback,
    editFeedBack,
    isLoading,
    deleteFeedBack,
    addFeedBack,
    FeedBackEdit,
    FeedBackUpdate,
    
    }}> 



{children}

</FeedBackContext.Provider>
}
export default FeedBackContext

