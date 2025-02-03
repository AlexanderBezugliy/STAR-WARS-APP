
import './style.css';

const ChooseSideImg = ({ onClick, text, img, className }) => {


    return ( 
        <div className={`choose-side__item ${className}`} 
             onClick={onClick} >

            <span className={`choose-side__text ${className}`}>{text}</span>
            <img src={img} className='choose-side__img' alt={text} />

        </div>
     );
}
 
export default ChooseSideImg;