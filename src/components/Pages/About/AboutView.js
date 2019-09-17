import React from 'react';
import '../../../assets/scss/pages/about.scss'


const AboutView = () => {
    const birthday = '30 мая 1988 г.';
    const city = 'Кропивницкий / Кировоград';
    const education = 'ГЛАУ';
    const languages = 'Русский, Украинский, Английский';
    const hobby = 'Рыбалка, Покер, Шахматы, Сериалы, Фильмы';
    const films = 'Аватар, Мстители, Матрица';
    const email = 'serglife777@gmail.com';
    return (
        <div className='wrapperAbout'>
            <div className="about">
                <h2>About me</h2>
                <p>the information about me!</p>
                <ul>
                    <li>День рождения: {birthday} </li>
                    <li>Город: {city}</li>
                    <li>Образование: {education}</li>
                    <li>Языки: {languages}</li>
                    <li>Хобби: {hobby}</li>
                    <li>Любимые фильмы: {films}</li>
                    <li>Email: {email}</li>
                </ul>
            </div>
        </div>
    )
};

export default AboutView;