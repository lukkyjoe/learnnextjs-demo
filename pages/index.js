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
    <h2>Bio</h2>
    <p>
    Eldon Bryce has been a professional dance teacher, performer, and choreographer for over 16 years.  He first discovered his love of dance as a boy learning the latest dance craze, breakdancing! After years of finding himself entertaining others through dance and theatre, he discovered partner dancing and found his reason for being. In January of 1997, he began his career at a Fred Astaire dance studio in Charlotte, North Carolina, and within 3 years he was presented with their highest award given to teachers. He moved to San Francisco in 2000, where he continued to study and perfect his main passion, the Argentine Tango.  He also studied abroad in Buenos Aires with numerous Tango masters and legends. Eldon has received his national dance certifications from the FADS, USISTD, and DVIDA dance organizations in the Ballroom, Latin, and all of the Club style dances. He has competed professionally in both Ballroom and Latin, but has always been most passionate about the Tango.  He feels the most important skills a dancer can learn is to be able to understand ones role as a leader or follower, and to connect and listen to their partner, enabling two people to move smoothly, comfortably, and in total unity with one another. Eldon has performed throughout his career with his students and professional partners in a variety of different stages and on all types of dance floors.  He was a featured dancer in the movie "Swing", and has choreographed and performed on MTV. He has also been featured in eight instructional dance DVDs, including the first ever "How to Become a Certified Dance Teacher." 
    </p>
    <h2>Classes</h2>
    <p>
    The lessons that I teach are 50 minutes in length, and can be scheduled on the hour or half-hour, depending on previously scheduled appointments or availability. 

My fee is $80 per lesson, and I do offer a 5 lesson package for $375 ( 75 per lesson)

 Payment can be accepted by Venmo, PayPal, credit card, or check. It is not required to pay in advance, but only at the time of your lesson. 

My teaching hours are usually Tuesday thru Friday 5pm-10pm, and Saturdays from 11am-5pm.  However, I am also available to teach from 11am-5pm during the weekdays if needed. 

Dance shoes are not required, and any street shoes will do as long as they are comfortable and won’t slip off your heel or fly off your feet when you kick your feet up!

    <h2>Location</h2>
    <p>
    My studio is located in downtown San Francisco, at 1067 Market st. ( near 7th) Suite #5005.  Civic center and City Hall is across the street, so many students enjoy getting there marriage license and then walking over for a dance lesson.  There are numerous ways of arriving by public transportation, as well as street parking and garages 2-3 blocks away. 
    </p>

    </p>
    <h2>Contact</h2>
    <p>
    Please feel free to contact me if you have any more questions, or to schedule your first lesson.  I can be reached via email, text, or call.  I look forward to meeting you and getting started as soon as possible, because the more time you have, and with each lesson that you take, the better you will dance on your most special wedding day!  Thank you very much!

Phone: 415-699-6565
Email:   Eldonbryce@gmail.com
    </p>
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