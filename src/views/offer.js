import React,{Component} from "react";
import OfferShort from "../components/offer-short";
import {homeCfg} from "../config";

class Offer extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <OfferShort backLink={[homeCfg[1],homeCfg[0]]}/>
            </main>
        );
    }
}
export default Offer;