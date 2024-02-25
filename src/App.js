import './App.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,
  faTwitter, 
  faLinkedin, 
  faInstagram, 
  faDribbble, 
  faDev, 
  faGithub} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="website">
      <div className="card">
        <img className="profile-pic" alt="" src="8e5aded0d59d01b731e70830feaecd57.jpeg">
        </img>
        <div className="personal-details">
          <h1>Noah Hernandez</h1>
          <h2>Web Developer</h2>
          <p>This is my bio! I like to surf, hike, and climb! Currently studying Data Science @ UC Berkeley, and dabbling in a bit of music.</p>
        </div>
        <button className="email">noahh_@berkeley.edu</button>
        <div className="social-media-icon">
          <FontAwesomeIcon icon={['fab', 'facebook-f']} />
        </div>
      </div>
    </div>
  );
}

export default App;


/*<FontAwesomeIcon icon="fa-brands fa-twitter" />
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
          <FontAwesomeIcon icon="fa-brands fa-dribbble" />
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          <FontAwesomeIcon icon="fa-brands fa-github" />
          <FontAwesomeIcon icon="fa-brands fa-dev" /> */