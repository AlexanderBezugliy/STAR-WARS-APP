import { useParams } from 'react-router';
import { SWApiServices } from '../../../utils/SWApi';
import { useEffect, useState } from 'react';
import { getPeopleImg } from '../../../utils/SWApi';

import ErrorMessage from '../../../errorMessage/ErrorMessage';
import PersonInfo from '../../Person/PersonInfo/PersonInfo';
import PersonImg from '../../Person/PersonImg/PersonImg';
import PersonLinkBack from '../../Person/PersonLinkBack/PersonLinkBack';
import PersonFilms from '../../Person/PersonFilms/PersonFilms';
import Loading from '../../Loading/Loading';

import './style.css';


const SinglePersonPage = () => {
    const [personInfo, setPersonInfo] = useState(null);
    const [errorApi, setErrorApi] = useState(false);
    const [personImg, setPersonImg] = useState(null);

    const { id } = useParams(); //вытаскиваю id из URL

    const { getSinglePerson } = SWApiServices();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getSinglePerson(id);

                const imgUrl = getPeopleImg(id); //URL фото

                setPersonInfo({
                    ...data, // Все данные(персонажа)
                    id: id,  // Добавьте id в personInfo < -----
                    imgUrl, 
                });
                setPersonImg(imgUrl); //URL фото для отображения
                setErrorApi(false)
            } catch (error) {
                setErrorApi(true);
            }
        };

        fetchData();
    }, [id]);


    return (
        <>
            {errorApi
                ? <ErrorMessage />
                : <View
                    personInfo={personInfo}
                    personImg={personImg}
                    personId={id} />
            }
        </>
    );
}


const View = ({ personInfo, personImg, personId }) => {
    if (!personInfo) {
        return <Loading />;
    }

    return (
        <>
            <PersonLinkBack />

            <div className='person__wrapper'>
                <span className='person__name'>{personInfo.name}</span>

                <div className='person__container'>
                    <PersonImg 
                        personImg={personImg} 
                        personInfo={personInfo} />

                    <PersonInfo personInfo={personInfo} />

                    <PersonFilms personId={personId} />
                </div>
            </div>
        </>
    );
}

export default SinglePersonPage;