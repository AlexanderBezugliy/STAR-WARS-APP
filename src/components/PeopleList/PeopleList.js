import { Link } from 'react-router';
import Loading from '../Loading/Loading';
import './style.css';

const PeopleList = ({ people, loading }) => {
    if (loading) {
        return <Loading />
    }

    return (
        <ul className='list__container'>
            {people.map((person) => (
                <li className='list__item' key={person.id}>
                    <Link to={`/people/${person.id}`}>
                        <img
                            className='person__photo'
                            src={person.img}
                            alt={person.name}
                        />
                        
                        <p>{person.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default PeopleList;