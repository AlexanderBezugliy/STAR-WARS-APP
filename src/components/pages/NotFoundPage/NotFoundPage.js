import { useLocation } from 'react-router';
import img from './not-found.png';
import './style.css'; 

const NotFoundPage = () => {
    let location = useLocation();

    return ( 
        <>
            <img className='not-found_img' src={img} alt="Not Found" />
            <p className='not-found_text'>No match for <u>{location.pathname}</u></p>
        </>
    );
}
 
export default NotFoundPage;