
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL } from '../context/ThemeConstants';
import { useTheme } from '../context/ThemeProvider';
import ChooseSideImg from './ChooseSideImg';

import neitralImg from './img/falcon.jpg';
import lightSideImg from './img/light-side.jpg';
import darkSideImg from './img/marvel_starter.jpg';


import './style.css';


const ChooseSide = () => {
    const isTheme = useTheme();


    return (
        <div className='choose-side__container'>
            <ChooseSideImg
                onClick={() => isTheme.change(THEME_LIGHT)}
                text="Light Side"
                img={lightSideImg} 
                className="choose-side__item--light" />

            <ChooseSideImg
                onClick={() => isTheme.change(THEME_DARK)}
                text="Dark Side"
                img={darkSideImg} 
                className="choose-side__item--dark" />

            <ChooseSideImg
                onClick={() => isTheme.change(THEME_NEITRAL)}
                text="I`m Han Solo"
                img={neitralImg} 
                className="choose-side__item--neitral" />
        </div>
    );
}

export default ChooseSide;