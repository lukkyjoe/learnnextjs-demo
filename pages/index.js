import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import { Topics } from '../Topics.json'

// map from a common location
// function getPosts () {
//   return [
//     { id: 'bio', title: 'Bio'},
//     { id: 'classes', title: 'Classes'},
//     { id: 'location', title: 'Location'},
//     { id: 'contact', title: 'Contact'},

// ]
// }

export default () => (
  <Layout>
    <h1>Danceternal Studio</h1>
    <p>
    Hello, ladies and gentlemen!

    Get ready to shine!

    Welcome to Danceternal studio, where you will learn the pleasure of dancing together beautifully for the rest of your lives!

    I have been teaching couples to move together as one on the dance floor since 1997.  I specialize in making the process fun and easy, while maximizing the amount of time you have to create a wonderful dance that you will be proud to perform on your wedding day.  Even if you are both first-time beginners with four left feet, in just a few lessons you can be transformed into accomplished dancers that will be enjoyable to watch by all of your family and friends, and have a great time doing so - I promise!  
    </p>
    <ul>
      {Topics.map((post) => (
        <li key={post.id}>
          <Link id={post.id} as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)