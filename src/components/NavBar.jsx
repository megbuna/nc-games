import { Link } from "react-router-dom";

export const NavBar = () => {
    const username = 'mallionaire'
    return (
        <nav>
            <ul className="navbar">
                <li> Genres: </li>
                <Link to={`/reviews?category=strategy`}><li> Strategy </li></Link>
                <Link to={`/reviews?category=dexterity`}><li>Dexterity</li></Link>
                <Link to={`/reviews?category=push-your-luck`}><li>Push-Your-Luck</li></Link>
                <Link to={`/reviews?category=roll-and-write`}><li>Roll-and-Write</li></Link>
                <Link to={`/reviews?category=deck-building`}><li>Deck-Building</li></Link>
                <Link to={`/reviews?category=engine-building`}><li>Engine-Building</li></Link>
                <Link to={`/${username}/comments`}><li>My Comments</li></Link>
            </ul>
        </nav>
    );
};