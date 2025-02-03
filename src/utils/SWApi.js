import useHttp from "../hooks/http.hooks";

// URL для API
const _apiBase = 'https://swapi.py4e.com/api/';
const _apiPeople = 'people';

const _apiParamPage = '/?page=';
const _apiParamSearch = '/?search=';

const _apiBaseImg = 'https://starwars-visualguide.com/assets/img';
const _apiPeopleImg = '/characters';
const _apiImgExtension = '.jpg';



// функция для получения данных перс.
const SWApiServices = () => {
    const { request } = useHttp();

    //функция для получения страницы персонажей
    const getResource = async (page = 1) => {
        const res = await request(`${_apiBase}${_apiPeople}${_apiParamPage}${page}`);

        return {
            results: res.results.map(({ name, url }) => ({ name, url })), // Массив персонажей
            previous: res.previous, 
            next: res.next 
        };
    };

    //функция для получения одного персонажа(с инф. о нем)
    const getSinglePerson = async (id) => {
        const res = await request(`${_apiBase}${_apiPeople}/${id}/`);

        return res; 
    };

    //функция для поиска персонажа
    const getCheracterSearch = async (param) => {
        const res = await request(`${_apiBase}${_apiPeople}${_apiParamSearch}${param}`);

        return res.results.map(({ name, url }) => ({
            name, 
            id: getPeopleId(url),//id из url
        }));
    }

    //функция для получения фильмов в которых учавствовал персонаж
    const getFilmTitle = async (url) => {
        const res = await request(url);

        return res;
    };

    return {
        getResource,
        getSinglePerson,
        getFilmTitle,
        getCheracterSearch
    };
};

//функция для извлечения id из url
const getId = (url, category) => {
    const id = url.replace(`https://swapi.py4e.com/api/${category}/`, '')
                  .replace(/\//g, '');
    return id;
};

//функция для получения id перс.
const getPeopleId = (url) => getId(url, 'people');

//функция для получения url img перс.
const getPeopleImg = (id) => `${_apiBaseImg}${_apiPeopleImg}/${id}${_apiImgExtension}`;



export { SWApiServices, getPeopleId, getPeopleImg };
// // функция для получения данных перс.
// const SWApiServices = () => {
//     const { request } = useHttp();

//     //функция для получения страницы персонажей
//     const getResource = async (page = 1) => {
//         const res = await request(`${_apiBase}${_apiPeople}${_apiParamPage}${page}`);

//         return {
//             results: res.results.map(({ name, url }) => ({ name, url })), // Массив персонажей
//             previous: res.previous, 
//             next: res.next 
//         };
//     };

//     //функция для получения одного персонажа(с инф. о нем)
//     const getSinglePerson = async (id) => {
//         const res = await request(`${_apiBase}${_apiPeople}/${id}/`);

//         return res; 
//     };

//     //функция для поиска персонажа
//     const getCheracterSearch = async (param) => {
//         const res = await request(`${_apiBase}${_apiPeople}${_apiParamSearch}${param}`);

//         return res.results.map(({name, url}) => ({
//             name, 
//             id: getPeopleId(url), // Получаем id из url
//         }));
//     }

//     //функция для получения фильмов в которых учавствовал персонаж
//     const getFilmTitle = async (url) => {
//         const res = await request(url);

//         return res;
//     };

//     return {
//         getResource,
//         getSinglePerson,
//         getFilmTitle,
//         getCheracterSearch
//     };
// };

// //функция для извлечения id из url
// const getId = (url, category) => {
//     const id = url.replace(`https://swapi.py4e.com/api/${category}/`, '')
//                   .replace(/\//g, '');
//     return id;
// };

// //функция для получения id перс.
// const getPeopleId = (url) => getId(url, 'people');

// //функция для получения url img перс.
// const getPeopleImg = (id) => `${_apiBaseImg}${_apiPeopleImg}/${id}${_apiImgExtension}`;



// export { SWApiServices, getPeopleId, getPeopleImg };