import Link from 'next/link'
import { Topics } from '../Topics.json'

const linkStyle = {
  marginRight: 15
}

//map from common location
const Header = () => (
    <div>
      {Topics.map((post) => (
        <Link href={`#${post.id}`}>
          <a style={linkStyle}>{post.title}</a>
        </Link>         
      ))}
    </div>
)

export default Header
