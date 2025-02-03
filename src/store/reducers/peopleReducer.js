//---------- people REDUCER ----------

// const initialState = {
//     people: [],
//     errorApi: false,
//     prevPage: null,
//     nextPage: null,
//     loading: false,
// };

// const peopleReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FETCH_PEOPLE_START':
//             console.log('Fetching people data...');
//             return {
//                 ...state,
//                 loading: true,
//                 errorApi: false,
//             }
//         case 'FETCH_PEOPLE_SUCCESS':
//             console.log('People data fetched successfully:', action.payload);
//             return {
//                 ...state,
//                 people: action.payload.people,
//                 prevPage: action.payload.prevPage,
//                 nextPage: action.payload.nextPage,
//                 loading: false,
//             }
//         case 'FETCH_PEOPLE_ERROR':
//             console.error('Error fetching people data');
//             return {
//                 ...state,
//                 loading: false,
//                 errorApi: true,
//             }
    
//         default:
//             return state;
//     }
// };

// export default peopleReducer;

