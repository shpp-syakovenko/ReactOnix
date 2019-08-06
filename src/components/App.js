import React,{Fragment} from 'react'
import Header from './header'
import Information from './information'
import Works from './works'
import Service from './service'
import Team from './team'
import Logos from './logos'
import Contact from './contact'
import Footer from './footer'
import 'bootstrap/dist/css/bootstrap-grid.css'
import '../assets/css/main.css'
import Biography from "./biography";

function App(){
    return(
        <Fragment>
            <Header />
            <Information />
            <Biography />
            <Works />
            <Service />
            <Team />
            <Logos/>
            <Contact/>
            <Footer/>
        </Fragment>
    )
}

export default App

