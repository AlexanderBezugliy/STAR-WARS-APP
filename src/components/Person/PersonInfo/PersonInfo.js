
import './style.css';

const PersonInfo = ({ personInfo }) => {
    return (
        <div className='persone-info__wrapper'>
            <ul className='persone-info__container'>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Height:</span> {personInfo.height}
                </li>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Mass:</span> {personInfo.mass}
                </li>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Hair Color:</span> {personInfo.hair_color}
                </li>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Skin Color:</span> {personInfo.skin_color}
                </li>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Eye Color:</span> {personInfo.eye_color}
                </li>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Birth Year:</span> {personInfo.birth_year}
                </li>
                <li className='persone-info__item'>
                    <span className='persone-info__item_title'>Gender:</span> {personInfo.gender}
                </li>
            </ul>
        </div>
    );
}

export default PersonInfo;