import { useNavigate } from 'react-router-dom';
import iconBack from './back.svg';
import './style.css';


const PersonLinkBack = () => {

    const navigate = useNavigate()

    const handleGoBack = (e) => {
        e.preventDefault();

        navigate(-1); // Переход на предыдущую страницу
    }


    return (
        <a href="#" className='link-back' onClick={handleGoBack} >

            <img src={iconBack} alt="iconBack" className='link-back__img'/>
            <span>Go Back</span>
        </a>
    );
}

export default PersonLinkBack;