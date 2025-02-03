
//---------- REDUCER ----------

const initialState = {
    favorites: [], // []-для хранения избранных персонажей
};

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON_TO_FAVORITE':
            const isAlreadyFavorite = state.favorites.some((person) => person.id === action.payload.id);
            
            if (isAlreadyFavorite) {
                return state;
            }

            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case 'REMOVE_PERSON_FROM_FAVORITE':
            const updatedFavorites = state.favorites.filter((person) => person.id !== action.payload);
            
            return {
                ...state,
                favorites: updatedFavorites,
            };
        default:
            return state;
    }
};


export default favoriteReducer;