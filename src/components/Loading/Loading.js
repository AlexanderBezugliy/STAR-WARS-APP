import { useEffect, useState } from 'react';
import loaderWhite from './img/loader-white.svg';
import loaderBlue from './img/loader-blue.svg';
import loaderBlack from './img/loader-black.svg';
import './style.css';


const Loading = ({ theme = 'white', isShadow=true }) => {
    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'black':
                setLoaderIcon(loaderBlack);
                break;
            case 'blue':
                setLoaderIcon(loaderBlue);
                break;
            case 'white':
                setLoaderIcon(loaderWhite);
                break;
                
            default:
                setLoaderIcon(loaderWhite);
                break;
        }
    }, [])

    return (
        <>
            <img 
                src={loaderIcon} 
                className='loader' 
                alt="loader" />
        </>
    );
}

export default Loading;