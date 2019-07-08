import React,{Component} from "react";


class Information extends Component{
    render() {
        return(
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
                                <li>День рождения: 30 мая 1988 г.</li>
                                <li>Город: Кропивницкий / Кировоград</li>
                                <li>Образование: ГЛАУ</li>
                                <li>Языки: Русский, Украинский, Английский</li>
                                <li>Хобби: Рыбалка, Покер, Шахматы, Сериалы, Фильмы</li>
                                <li>Любимые фильмы: Аватар, Мстители, Матрица</li>
                                <li>Email: serglife777@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Information