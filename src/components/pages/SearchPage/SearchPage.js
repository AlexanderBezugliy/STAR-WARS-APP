import { useEffect, useState } from 'react';
import { getPeopleImg, SWApiServices } from '../../../utils/SWApi';
import { useNavigate } from 'react-router';

import './style.css';

const SearchPage = () => {
    const [inputSearchValue, setInputSearchValue] = useState('');
    const [characters, setCharacters] = useState([]);
    const [isSearching, setIsSearching] = useState(false);//state(вдруг персонаж не найден и нужно оповестить пользователя)

    const navigate = useNavigate();
    const { getCheracterSearch } = SWApiServices();

    const handleInputChange = (event) => {
        setInputSearchValue(event.target.value);
    }

    //запрос с задержкой(debounce)
    useEffect(() => {
        if (!inputSearchValue.trim()) {
            setCharacters([]); //если строка пустая обнуляем
            return;
        }

        setIsSearching(true);
        const delay = setTimeout(async () => {
            const results = await getCheracterSearch(inputSearchValue);

            setCharacters(results);
            setIsSearching(false);
        }, 200);

        return () => clearTimeout(delay);
    }, [inputSearchValue]);

    const handleCharacterClick = (id) => {
        navigate(`/people/${id}`);
    };

    return (
        <>
            <h1 className="header__text">SearchPage</h1>

            <input
                type='text'
                value={inputSearchValue}
                onChange={handleInputChange}
                className='search-input'
                placeholder='Characters name...' 
            />

            <div className="search-wrapper">
                {characters.map(({ name, id }) => (
                    <div
                        key={id}
                        className="search-card"
                        onClick={() => handleCharacterClick(id)}  
                        >
                            <img 
                                src={getPeopleImg(id)} 
                                className='search-card__img' 
                                alt={name} 
                            />

                            <p className='search-card__text'>{name}</p>
                    </div>
                ))}
            </div>
            
            {/* то для чего мы делали состояние(isSearching) потому что у нас всегда имут
             в начале пустой, и сложно сделать проверку без этого */}

            {!isSearching && characters.length === 0 && inputSearchValue.trim() && (
                <p className="error__massage">No results found... </p>
            )}
        </>
    );
}


export default SearchPage;
