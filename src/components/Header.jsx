
import PropTypes from 'prop-types'

function Header({text,background,textcolor}) {
    const headerStyle={

        backgroundColor:background,
        color:textcolor
    }
  return (
    
    <header style={headerStyle}>

    <div className="container">
        
        <h2>

        {text}
        </h2>

        </div>

    </header>
    

    
  )
}
Header.defaultProps = {
    text:'Feedback UI',
    background:'rgba(0,0,0,0.4)',
    textcolor:'#ff6a95',

}
Header.propTypes = {

    text:PropTypes.string,
    background:PropTypes.string,
    textcolor:PropTypes.string,
}

export default Header
