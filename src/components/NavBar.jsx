import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGenres } from "../api"

export const NavBar = () => {
    const username = 'mallionaire'

    const [genres, setGenres] = useState([])

    useEffect(() =>{
        getGenres().then((genres) => {
            setGenres(genres)
        });
    },[])

    return (
        <nav>
            <ul className="navbar">
                <li> Genres: </li>
                {
                    genres.map((genre)=>{
                        return (
                        <Link to={`reviews?category=${genre.slug}`} key={genre.slug}>
                        <li>{genre.slug}</li>
                        </Link>
                        )
                })
            }
            </ul>
        </nav>
    );
};