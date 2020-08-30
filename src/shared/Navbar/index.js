import React from "react";
import {Link} from "react-router-dom";
import './dropdown.css'

export default function Navbar(props){
    return(
        <div style={{marginBottom:'80px'}}>
                <nav className="navbar navbar-expand-xl navbar-light bg-primary fixed-top">
                   <Link className="navbar-brand" to="/institution">ContossoApp</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link">
                                    <i className="fa fa-code">
                                        {props.institution_name}
                                    </i>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-edit" style={{paddingLeft:'70px'}}>Gestion des étudiants</i>
                                </Link>
                            </li>
                            <li>

                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
}