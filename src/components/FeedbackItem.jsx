


import Card from './shared/Card'
import  PropTypes  from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'


function FeedbackItem({item}) {
    const {deleteFeedBack,FeedBackEdit} = useContext(FeedBackContext)
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={()=>deleteFeedBack(item.id)}>
      <FaTimes color='purple'/>

      </button>
      <button className="edit" onClick={ ()=>FeedBackEdit(item)}>


       <FaEdit color='purple'/> 
      </button>
      <div className="text-display">{item.text}</div>
      
      
    </Card>
  )
  
}
FeedbackItem.propTypes = {
item: PropTypes.object.isRequired,
}
  
export default FeedbackItem
