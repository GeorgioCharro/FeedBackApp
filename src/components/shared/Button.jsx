import PropTypes from 'prop-types'


function Button({type,version,children,isDisabled}) {
  return (
    <div>
      <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
        
        {children}
        
        </button>
    </div>
  )
}
    Button.defaultProps={

        version:'primary',
        isDisabled:false,
        type:'button',
    }
    Button.propTypes={
        children:PropTypes.node.isRequired,
        type:PropTypes.string ,
        version:PropTypes.string,
        isDisabled:PropTypes.bool,


    }
export default Button

