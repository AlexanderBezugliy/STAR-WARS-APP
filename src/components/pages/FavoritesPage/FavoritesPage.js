import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { removePersonFromFavorite } from '../../../store/actions/actions';
import deleteImg from './del.svg';

import './style.css';


const FavoritesPage = () => {
    const favorites = useSelector((state) => state.favorites.favorites || []);

    const dispatch = useDispatch();

    if (favorites.length === 0) {
        return <p className='error__massage'>No favorite characters added yet.</p>;
    }

    return (
        <>  
            <h1 className='header__text'>Favorites Page</h1>
            
            <ul>
                {favorites.map((person) => (
                    //ОБЯЗАТЕЛЬНО! ID
                    <li className='favorites-page__main-wrapper' key={person.id}>

                        <div className='photo__container'>
                            <img className='photo' src={person.imgUrl} alt={person.name} />

                            <img
                                src={deleteImg}
                                onClick={() => dispatch(removePersonFromFavorite(person.id))}
                                className='favorite'
                                alt="Add to favorite" />
                        </div>

                        <div className='favorites-page__wrapper'>
                            <ul className='favorites-page__container'>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page-info__item_title-name'>Name: {person.name}</span>
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Mass:</span> {person.mass}
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Gender:</span> {person.gender}
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Height:</span> {person.height}
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Birth Year:</span> {person.birth_year}
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Hair Color:</span> {person.hair_color}
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Skin Color: </span> {person.skin_color}
                                </li>
                                <li className='favorites-page__item'>
                                    <span className='favorites-page__item_title'>Eye Color:</span> {person.eye_color}
                                </li>
                            </ul>
                        </div>

                    </li>
                ))}
            </ul>
        </>
    );
}

export default FavoritesPage;