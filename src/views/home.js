import React,{Component} from "react";
import AboutShort from "../components/about-short";
import ContactData from "../components/contact-data";
import OfferShort from "../components/offer-short";
import Slider from "../components/slider";
import {homeCfg} from "../config";

class Home extends Component{
    render(){
        return(
            <main className="minh-100vh bg-white">  
                <Slider/> 
                <OfferShort backLink={[homeCfg[1],homeCfg[0]]}/>
                <AboutShort backLink={homeCfg[2]}/>
                <ContactData backLink={homeCfg[3]}/>
            </main>
        );
    }
}
export default Home;