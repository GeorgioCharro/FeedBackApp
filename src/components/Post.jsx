/* import {useParams} from 'react-router-dom' */
import {Navigate, useNavigate} from 'react-router-dom'
import {Route,Routes } from 'react-router-dom'

function Post() {
    const state=200
    const navigate=useNavigate()
    /* const params= useParams() */

    if(state===404){

        return <Navigate to={'pagenotefound'}/>
    }

    const onCLick=()=>{
        console.log('Worked')
        navigate('/about')

    }
  return (
    
    <div>
     <button className='btn' onClick={onCLick}></button>
         
         
    

    <Routes>
        <Route path='/message' element={<h1>Hello Message</h1>}/>

    </Routes>
    </div>
  )
}

export default Post
