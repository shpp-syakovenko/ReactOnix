import React,{Component} from 'react'
import map from '../../images/map.jpg'


class Contact extends Component{

    render() {

        const phone = '+548 945645';
        const fax = '+456456 54546';
        const web = 'www.designagency.net';
        const email_contact = 'info@designagency.net';

        return(
            <div id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="wrapper-form">
                                <form action="#" method="post">
                                    <div className="name">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="subject">
                                        <input type="text" placeholder="Subject"/>
                                    </div>
                                    <div className="e-mail">
                                        <input type="text" placeholder="E-mail"/>
                                    </div>
                                    <div className="message">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="submit">
                                        <input type="submit" value="send message" name='submit'/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="wrapper-map">
                                <p>Adress line 1</p>
                                <p>Adress line 2</p>
                                <p>Phone: {phone}</p>
                                <p className="fax">Fax: {fax}</p>
                                <p>Web: {web}</p>
                                <p>E-mail: {email_contact}</p>

                                <div className="map">
                                    <img src={map} alt="map"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact