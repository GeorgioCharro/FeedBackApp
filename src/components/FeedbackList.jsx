
import FeedbackItem from './FeedbackItem'
import  PropTypes  from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedBackContext'
function FeedbackList({deleteFeedBack}) {
  const {feedback} = useContext(FeedbackContext)

  if(!feedback || feedback===0){

    return <p>No Feedback yet</p>
  }
  return (
    
    
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item)=>(
        <motion.div key={item.id}
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
        >

        <FeedbackItem key={item.id} item={item} handleDelete={deleteFeedBack} />
        </motion.div>
      ))}
      </AnimatePresence>
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
