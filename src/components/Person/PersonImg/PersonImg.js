import { useDispatch, useSelector } from 'react-redux';
import { setPersonToFavorite, removePersonFromFavorite } from '../../../store/actions/actions';
import iconFavorite from './img/favorite.svg';
import iconFavoriteFill from './img/favorite-fill.svg';
import './style.css';


const PersonImg = ({ personImg, personInfo }) => {
    const dispatch = useDispatch();

    // Получаем список избранных персонажей
    const favorites = useSelector((state) => state.favorites.favorites);
    
    // Проверяем, находится ли персонаж в избранном
    const isFavorite = favorites.some((person) => person.id === personInfo.id);

    const toggleFavoriteStatus = () => {
        if (isFavorite) {
            dispatch(removePersonFromFavorite(personInfo.id));
        } else {
            dispatch(setPersonToFavorite({
                id: personInfo.id,
                name: personInfo.name,
                imgUrl: personImg,
                mass: personInfo.mass,
                gender: personInfo.gender,
                height: personInfo.height,
                birth_year: personInfo.birth_year,
                hair_color: personInfo.hair_color,
                skin_color: personInfo.skin_color,
                eye_color: personInfo.eye_color,
            }));
        }
    };


    return (
        <>
            <div className='photo__container'>
                <img className='photo' src={personImg} alt={personInfo.name} />

                <img
                    src={isFavorite ? iconFavoriteFill : iconFavorite}
                    onClick={toggleFavoriteStatus}
                    className='favorite'
                    alt="Add to favorite" />
            </div>
        </>
    );
}

export default PersonImg;