// import { getPeopleId, getPeopleImg, SWApiServices } from "../../utils/SWApi";

// //-------  people ACTIONS --------

// export const fetchPeopleStart = () => ({
//     type: 'FETCH_PEOPLE_START',
// });

// export const fetchPeopleSuccess = (data) => ({
//     type: 'FETCH_PEOPLE_SUCCESS',
//     payload: {
//         people: data.results.map(({ name, url }) => ({
//             id: getPeopleId(url),
//             name,
//             img: getPeopleImg(getPeopleId(url)),
//         })),
//         prevPage: data.previous,
//         nextPage: data.next,
//     },
// });

// export const fetchPeopleError = () => ({
//     type: 'FETCH_PEOPLE_ERROR',
// });


// export const fetchPeople = (page) => async (dispatch) => {
//     dispatch(fetchPeopleStart());

//     try {
//         const { getResource } = SWApiServices();

//         const data = await getResource(page);
//         console.log(data); // Логируем данные для проверки

//         dispatch(fetchPeopleSuccess(data));
//     } catch (error) {
//         console.error('Error in fetchPeople:', error); // Логируем ошибку
//         dispatch(fetchPeopleError());
//     }
// };