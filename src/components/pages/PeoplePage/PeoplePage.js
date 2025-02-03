import { useEffect, useReducer } from 'react';
import { getPeopleId, getPeopleImg, SWApiServices } from '../../../utils/SWApi';
import { useNavigate, useSearchParams } from 'react-router-dom';
import PeopleList from '../../PeopleList/PeopleList';
import ErrorMessage from '../../../errorMessage/ErrorMessage';
import Buttons from '../../Buttons/Buttons';
import './style.css';

//начальное состояние
const initialState = {
    people: [],
    errorApi: false,
    prevPage: null,
    nextPage: null,
    loading: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                loading: true,
                errorApi: false,
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                people: action.payload.people,
                prevPage: action.payload.prevPage,
                nextPage: action.payload.nextPage,
                loading: false,
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                errorApi: true,
            }
    
        default:
            return state;
    }
};

const PeoplePage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { people, errorApi, prevPage, nextPage, loading } = state;

    const [searchParams, setSearchParams] = useSearchParams();

    const page = parseInt(searchParams.get('page') || '1', 10); //ПО УМОЛЧАНИЮ ПЕРВАЯ СТРАНИЦА
    
    const navigate = useNavigate();

    const { getResource } = SWApiServices();

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_START' });

            try {
                const data = await getResource(page);

                const peopleList = data.results.map(({ name, url }) => {
                    return {
                        id: getPeopleId(url),
                        name,
                        img: getPeopleImg(getPeopleId(url)),
                    }
                })

                dispatch({ 
                    type: 'FETCH_SUCCESS',
                    payload: {
                        people: peopleList,
                        prevPage: data.previous,
                        nextPage: data.next, 
                    }
                })
            } catch (error) {
                dispatch({ type: 'FETCH_ERROR' })
            } 
        };

        fetchData();//ОБЯЗАТЕЛЬНО ВНУТРИ ВЫЗАТЬ ФУНКЦИЮ!
    }, [searchParams]); //ЗАВИСИМ ОТ searchParams

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
            {errorApi ? <ErrorMessage /> : <View {...{...viewProps}} />}
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
                <Buttons {...{...buttonProps}} />
            </div>

            <PeopleList people={people} loading={loading} />
        </>
    )
}

export default PeoplePage;
