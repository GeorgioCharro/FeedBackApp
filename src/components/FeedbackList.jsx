
import FeedbackItem from './FeedbackItem'
import {motion, AnimatePresence} from 'framer-motion'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedBackContext'
import Spinner from './shared/Spinner'
function FeedbackList({deleteFeedBack}) {
  const {feedback,isLoading} = useContext(FeedbackContext)

  if( isLoading && (!feedback || feedback.length===0)){

    return <p>No Feedback yet</p>
  }

  return (isLoading?<Spinner />:
  
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
</div>)
 
}

export default FeedbackList
