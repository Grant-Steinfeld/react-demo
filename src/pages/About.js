import { Link } from 'react-router-dom';

function About(props) {
    return (
        <div className="Container">
            <h2>How to Use Counter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo temporibus nisi quidem pariatur, iste mollitia inventore exercitationem quo repellat, eligendi fugit? Excepturi vitae voluptatibus odit doloribus provident! Quibusdam, odit!</p>
            <Link to="/">Back to Counter</Link>
        </div>
    );
}

export default About;