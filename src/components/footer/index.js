import React from 'react'
import psd from '../../file/Shopno_one_page.psd'

export default function Footer () {
    return(
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="follow">
                            <p>Follow Us</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="footer-social">
                            <ul>
                                <li><a href="#footer"><i className="icon-pinterest"></i></a></li>
                                <li><a href="#footer"><i className="icon-twitter"></i></a></li>
                                <li><a href="#footer"><i className="icon-facebook-1"></i></a></li>
                                <li><a href="#footer"><i className="icon-dribbble-1"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>Copyright Masum Parvej, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <div className="github">
                            <p>GitHub:</p>
                            <p><a href="https://github.com/shpp-syakovenko/ReactOnix">Ссылка на
                                GitHub</a></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="psd">
                            <p><a href={psd} >Скачать шаблон</a></p>
                            <p><a
                                href="http://psd-html-css.ru/templates/besplatnyy-psd-shablon-lendingovoy-stranicy-agenstva"
                                >Ссылка на исходный шаблон</a></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="autor">
                            <p>Автор:</p>
                            <p>Сергей Яковенко</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}