import { createStore, combineReducers } from 'redux';
import favoriteReducer from './reducers/favoriteReducer';


//функция для получения избранных из LStor
const getSavedFavorites = () => {
    try {
        const favorites = localStorage.getItem('favorites');
        //проверка что favorites не null и не undefined
        if (favorites) {
            return JSON.parse(favorites);
        }
    } catch (error) {
        console.error('Ошибка при чтении из LocalStorage:', error);
    }

    return [];
};

//восстанавливаем избранных персонажей из LStor
const savedFavorites = getSavedFavorites();

//создаём Store с начальным состоянием для избранных
const store = createStore(
    //combineReducers({...}) объединяет все редьюсеры в один объект
    combineReducers({ favorites: favoriteReducer }),
    //второй аргумент {} в createStore—это начальное состояние(preloadedState)
    {
        favorites: {
            favorites: savedFavorites, // Начальное состояние для избранных
        },
    }
);

//подписываемся на изменения Store и сохраняем избранных в LStor
store.subscribe(() => {
    const favorites = store.getState().favorites.favorites;

    localStorage.setItem('favorites', JSON.stringify(favorites));
});

export default store;






