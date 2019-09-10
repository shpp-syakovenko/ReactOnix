import React from 'react'
import img_1 from '../../assets/images/img-1.jpg'
import img_2 from '../../assets/images/img-2.jpg'
import img_3 from '../../assets/images/img-3.jpg'
import img_4 from '../../assets/images/img-4.jpg'
import img_5 from '../../assets/images/img-5.jpg'
import img_6 from '../../assets/images/img-6.jpg'

const Works = () => {
        return(
            <section id="works">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="title-section">featured works</h2>
                            <p className="title-description">Lorem ipsum dolor sit amet event landing template</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="wrapper-works col-sm-6 col-md-4">
                            <a href="#works"><img src={img_1} alt="img"/></a>
                        </div>
                        <div className="wrapper-works col-sm-6 col-md-4">
                            <a href="#works"><img src={img_2} alt="img"/></a>
                        </div>
                        <div className="wrapper-works col-sm-6 col-md-4">
                            <a href="#works"><img src={img_3} alt="img"/></a>
                        </div>
                        <div className="wrapper-works col-sm-6 col-md-4">
                            <a href="#works"><img src={img_4} alt="img"/></a>
                        </div>
                        <div className="wrapper-works col-sm-6 col-md-4">
                            <a href="#works"><img src={img_5} alt="img"/></a>
                        </div>
                        <div className="wrapper-works col-sm-6 col-md-4">
                            <a href="#works"><img src={img_6} alt="img"/></a>
                        </div>
                    </div>
                </div>
            </section>
        )
};

export default Works