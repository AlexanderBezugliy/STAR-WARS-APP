import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

import icon from './bookmark.svg';

import './style.css';



const FavoritesIcon = () => {
    const favorites = useSelector((state) => state.favorites.favorites || []);

    const renderCounter = () => {
        return favorites.length > 99 ? '...' : favorites.length;
    };


    return ( 
        <div className='favorites-container'>
            <NavLink to="/favorites" >
                <span className='favorites-counter'>
                    {renderCounter()}
                </span>

                <img className='favorites-icon' src={icon} alt="Icon" />
            </NavLink>
            
        </div>
    );
}

export default FavoritesIcon;