import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeProvider";
import FavoritesIcon from "../FavoritesIcon/FavoritesIcon";
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from "../context/ThemeConstants";

import imgDroid from './img/droid.svg';
import imgLightSaber from './img/lightsaber.svg';
import imgSpaceStation from './img/space-station.svg';

import './style.css';



const Header = () => {
    const [icon, setIcon] = useState(null);

    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgLightSaber);
                break;
            case THEME_DARK:
                setIcon(imgSpaceStation);
                break;
            case THEME_NEITRAL:
                setIcon(imgDroid);
                break;

            default:
                setIcon(imgSpaceStation)
                break;
        }
    }, [isTheme])

    return (
        <div className="container">
            <img src={icon}  className="header-logo" alt="star-wars" />
            
            <ul className="list__container_header">
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/search" end>Search</NavLink></li>

                {/* <li><NavLink to="/favorites" end>Favorites</NavLink></li> */}
                <li><NavLink to="/not-found" end>Not Found</NavLink></li>
            </ul>

            <FavoritesIcon />
        </div>
    );
}

export default Header;