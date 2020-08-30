import React from "react";
import AddList from "./AddList";
import Navbar from "../../shared/Navbar";
import Footer from "../../shared/Footer/index"

export default function Index(props){
    return(
        <div className="container-fluid">
            <Navbar institution_name={props.location.state.institution_name}/>
            <AddList institution_type={props.location.state.institution_type} institution_num={props.location.state.institution_num}/>
            <Footer/>
        </div>
    )
}