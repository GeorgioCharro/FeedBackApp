import Card from "./shared/Card"
import { useState } from "react";
import Button from "./shared/Button";
function FeedbackText() {

    const [text,setText]=useState('')


    const handleTextChange = (e) => {

        setText(e.target.value)

    }

  return (
    <div>
      <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">

        <input value={text} onChange={handleTextChange} type="text" placeholder="Write a review?"  />
        <Button type="submit" version="secondary">Send</Button>
        
        </div>
        </form>
        </Card>     
    </div>
  )
}

export default FeedbackText
