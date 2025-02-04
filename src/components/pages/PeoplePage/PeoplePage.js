import { useEffect, useState } from 'react';
import { getPeopleId, getPeopleImg, SWApiServices } from '../../../utils/SWApi';
import { useNavigate, useSearchParams } from 'react-router-dom';

import PeopleList from '../../PeopleList/PeopleList';
import ErrorMessage from '../../../errorMessage/ErrorMessage';
import Buttons from '../../Buttons/Buttons';

import './style.css';


const PeoplePage = () => {
    const [people, setPeople] = useState([]);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [errorApi, setErrorApi] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const page = parseInt(searchParams.get('page') || '1', 10); //ПО УМОЛЧАНИЮ ПЕРВАЯ СТРАНИЦА
    
    const navigate = useNavigate();

    const { getResource } = SWApiServices();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            try {
                const data = await getResource(page);

                const peopleList = data.results.map(({ name, url }) => {
                    return {
                        id: getPeopleId(url),
                        name,
                        img: getPeopleImg(getPeopleId(url)),
                    }
                })

                setLoading(false);
                setPeople(peopleList);
                setPrevPage(data.previous);
                setNextPage(data.next);
                setErrorApi(false);
            } catch (error) {
                setLoading(false);
                setErrorApi(true);
            } 
        };

        fetchData();//ОБЯЗАТЕЛЬНО ВНУТРИ ВЫЗАТЬ ФУНКЦИЮ!
    }, [page]); //ЗАВИСИМ ОТ searchParams

    const handlePageChange = (newPage) => {
        setSearchParams({
            page: newPage
        });

        if (newPage !== page) {
            navigate(`/people/?page=${newPage}`); //переходим на новый URL
        }
    };

    const viewProps = {
        people,
        handlePageChange,
        prevPage,
        nextPage,
        page,
        loading
    };

    return (
        <>
            {errorApi ? <ErrorMessage /> : <View {...viewProps} />}
        </>
    );
}


const View = ({ people, handlePageChange, prevPage, nextPage, page, loading }) => {
    const buttonProps = {
        handlePageChange,
        prevPage,
        nextPage,
        page,
        theme: 'dark'
    };

    return (
        <>
            <h1 className='header__text'>People Page</h1>

            <div className='wrapper__button-navigate'>
                <Buttons {...buttonProps} />
            </div>

            <PeopleList people={people} loading={loading} />
        </>
    )
}

export default PeoplePage;
