import React,{Component} from 'react'
import team_1 from '../../assets/images/team-1.jpg'
import team_2 from '../../assets/images/team-2.jpg'
import team_3 from '../../assets/images/team-3.jpg'
import team_4 from '../../assets/images/team-4.jpg'
import team_5 from '../../assets/images/team-5.jpg'


class Team  extends Component{
    render() {
        return(
            <section id="team">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="title-section">Small team</h2>
                            <p className="title-description">Lorem ipsum dolor sit amet event landing template</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="team-photo col-lg-4 col-sm-6">
                            <div className="wrapper-team">
                                <img src={team_1} alt="team"/>
                                    <div className="wrapper-team-description">
                                        <h3>AL RAYHAN / <span>UI Designer</span></h3>
                                        <p>Lorem Ipsum is not simply is an action designer random text
                                            It has roots in a piece. </p>
                                        <ul className="social">
                                            <li><a href="#team"><i className="icon-facebook-1"/></a></li>
                                            <li><a href="#team"><i className="icon-twitter"/></a></li>
                                            <li><a href="#team"><i className="icon-dribbble-1"/></a></li>
                                            <li><a href="#team"><i className="icon-mail"/></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="team-photo col-lg-4 col-sm-6">
                            <div className="wrapper-team">
                                <img src={team_2} alt="team"/>
                                    <div className="wrapper-team-description">
                                        <h3>AL RAYHAN / <span>UI Designer</span></h3>
                                        <p>Lorem Ipsum is not simply is an action designer random text
                                            It has roots in a piece. </p>
                                        <ul className="social">
                                            <li><a href="#team"><i className="icon-facebook-1"/></a></li>
                                            <li><a href="#team"><i className="icon-twitter"/></a></li>
                                            <li><a href="#team"><i className="icon-dribbble-1"/></a></li>
                                            <li><a href="#team"><i className="icon-mail"/></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="team-photo col-lg-4 col-sm-6">
                            <div className="wrapper-team">
                                <img src={team_3} alt="team"/>
                                    <div className="wrapper-team-description">
                                        <h3>AL RAYHAN / <span>UI Designer</span></h3>
                                        <p>Lorem Ipsum is not simply is an action designer random text
                                            It has roots in a piece. </p>
                                        <ul className="social">
                                            <li><a href="#team"><i className="icon-facebook-1"/></a></li>
                                            <li><a href="#team"><i className="icon-twitter"/></a></li>
                                            <li><a href="#team"><i className="icon-dribbble-1"/></a></li>
                                            <li><a href="#team"><i className="icon-mail"/></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="team-photo col-lg-4 col-sm-6">
                            <div className="wrapper-team">
                                <img src={team_4} alt="team"/>
                                    <div className="wrapper-team-description">
                                        <h3>AL RAYHAN / <span>UI Designer</span></h3>
                                        <p>Lorem Ipsum is not simply is an action designer random text
                                            It has roots in a piece. </p>
                                        <ul className="social">
                                            <li><a href="#team"><i className="icon-facebook-1"/></a></li>
                                            <li><a href="#team"><i className="icon-twitter"/></a></li>
                                            <li><a href="#team"><i className="icon-dribbble-1"/></a></li>
                                            <li><a href="#team"><i className="icon-mail"/></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="team-photo col-lg-4 col-sm-6">
                            <div className="wrapper-team">
                                <img src={team_5} alt="team"/>
                                    <div className="wrapper-team-description">
                                        <h3>AL RAYHAN / <span>UI Designer</span></h3>
                                        <p>Lorem Ipsum is not simply is an action designer random text
                                            It has roots in a piece. </p>
                                        <ul className="social">
                                            <li><a href="#team"><i className="icon-facebook-1"/></a></li>
                                            <li><a href="#team"><i className="icon-twitter"/></a></li>
                                            <li><a href="#team"><i className="icon-dribbble-1"/></a></li>
                                            <li><a href="#team"><i className="icon-mail"/></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <div className="team-photo col-lg-4 col-sm-6">
                            <div className="wrapper-team">
                                <img src={team_1} alt="team"/>
                                    <div className="wrapper-team-description">
                                        <h3>AL RAYHAN / <span>UI Designer</span></h3>
                                        <p>Lorem Ipsum is not simply is an action designer random text
                                            It has roots in a piece. </p>
                                        <ul className="social">
                                            <li><a href="#team"><i className="icon-facebook-1"/></a></li>
                                            <li><a href="#team"><i className="icon-twitter"/></a></li>
                                            <li><a href="#team"><i className="icon-dribbble-1"/></a></li>
                                            <li><a href="#team"><i className="icon-mail"/></a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default Team

