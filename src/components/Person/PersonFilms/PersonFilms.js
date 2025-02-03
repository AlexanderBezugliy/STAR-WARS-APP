import { useEffect, useState } from 'react';
import { SWApiServices } from '../../../utils/SWApi';

import Loading from '../../Loading/Loading';
import './style.css';

const PersonFilms = ({ personId }) => {
    const [personFilms, setPersonFilms] = useState([]);
    const [isFilmsLoading, setIsFilmsLoading] = useState(false);
    const [errorApi, setErrorApi] = useState(false);

    const { getSinglePerson, getFilmTitle } = SWApiServices();

    useEffect(() => {
        const fetchData = async () => {
            setIsFilmsLoading(true);
            try {
                const personData = await getSinglePerson(personId);//вытаскиваю данные о персонаже

                if (personData.films && personData.films.length > 0) {
                    const filmTitles = await Promise.all(
                        personData.films.map(async (url) => {
                            const filmData = await getFilmTitle(url);

                            return {
                                title: filmData.title,
                                episode: filmData.episode_id
                            };
                        })
                    );
                    setPersonFilms(filmTitles);
                }
                setErrorApi(false)
            } catch (error) {
                console.error('Error fetching films:', error);
                setErrorApi(true);
            } finally {
                setIsFilmsLoading(false);
            }
        };

        fetchData();
    }, [personId]);

    if (isFilmsLoading === true) {
        return <Loading />;
    }
    //проверка: ошибка загрузки
    if (errorApi) {
        return <div className='film-wrapper__title'>Error loading films...</div>; 
    }
    //проверка: вдруг нет фильмов
    if (!personFilms || personFilms.length === 0) {
        return <div className='film-wrapper__title'>No films found...</div>;
    }

    return (
        <div className='film-wrapper'>
            <ul className='film-wrapper__container'>
                {personFilms.map((film, index) => (
                    <li key={index} className='film-wrapper__list-item'>
                        <span className='film-wrapper__episode'>Episode {film.episode} </span>
                        <span className='film-wrapper__colon'> : </span>
                        <span className='film-wrapper__title'>{film.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PersonFilms;