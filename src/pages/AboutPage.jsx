
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <div>
      <Link to={{
        pathname:'/'

      }}>
      <p>Return To HomePage</p>
      </Link>
    </div>
  )
}

export default AboutPage
