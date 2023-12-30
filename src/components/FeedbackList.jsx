
import FeedbackItem from './FeedbackItem'
import  PropTypes  from 'prop-types'
function FeedbackList({feedback, deleteFeedBack}) {

  if(!feedback || feedback===0){

    return <p>No Feedback yet</p>
  }
  return (
    <div className="feedback-list">
      {feedback.map((item)=>(

        <FeedbackItem key={item.id} item={item} handleDelete={deleteFeedBack} />

      ))}
    </div>
  )
}
FeedbackList.propTypes = {

  feedback: PropTypes.arrayOf(

    PropTypes.shape({

      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
export default FeedbackList
