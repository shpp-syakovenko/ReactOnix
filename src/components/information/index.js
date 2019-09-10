import React from "react";


const Information = () => {
    const birthday = '30 мая 1988 г.';
    const city = 'Кропивницкий / Кировоград';
    const education = 'ГЛАУ';
    const languages = 'Русский, Украинский, Английский';
    const hobby = 'Рыбалка, Покер, Шахматы, Сериалы, Фильмы';
    const films = 'Аватар, Мстители, Матрица';
    const email = 'serglife777@gmail.com';

    return (
        <section id="information">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="title-section">My information</h2>
                        <p className="title-description">The information about me!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="myInformation">
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
            </div>
        </section>
    )
};

export default Information