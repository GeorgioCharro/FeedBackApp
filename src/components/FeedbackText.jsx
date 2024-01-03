import Card from "./shared/Card"
import { useState } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
function FeedbackText({handleAdd}) {

    const [text,setText]=useState('')
    const[btnDisabled,setButtonState]=useState(true)
    const[message,setMessage]=useState('')
    const [rating,setRating]=useState(10)

    const submitFeedback = (e)=>{
        e.preventDefault()

        if(text.trim().length>10){

          const newFeedBack={

            text,
            rating
          };
          handleAdd(newFeedBack)
          setText('')
        }

        
    }

    const handleTextChange = (e) => {
        if(text===''){

          setButtonState(true)
          setMessage(null)
        } else if(text !=='' && text.trim().length<=10){
          setButtonState(true)
          setMessage('Text must be at least 10 characters')

        }else {

          setMessage(null)
          setButtonState(false)
        }
        setText(e.target.value)

    }

  return (
    <div>
      <Card>
      <form onSubmit={submitFeedback}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <div className="input-group">

        <input value={text} onChange={handleTextChange} type="text" placeholder="Write a review?"  />
        <Button isDisabled={btnDisabled} type="submit" version="primary">Send</Button>
        
        </div>
        {message && <div className="message">{message}</div>}
        </form>
        </Card>     
    </div>
  )
}

export default FeedbackText
