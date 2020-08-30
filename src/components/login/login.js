import React,{Component} from "react";
import {Link,Redirect} from "react-router-dom";
import register from "./register"
import axios from "axios";

export default class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            pseudo:'',
            mdp:'',
            message:'',
            institution:null
        }

    }


    async getConnexion(){
         await axios.post('http://localhost:8000/api/login',
            {
                pseudo:this.state.pseudo,
                mdp:this.state.mdp
            }).then(res=>{
                if(res.data.datas){
                   this.setState({institution:res.data.datas})
                }else{
                    this.setState({message:res.data.message,pseudo:'',mdp:''})
                }
        }).catch(error=>{
            console.log("Error : "+error);
        })
    }


    render() {
        if(this.state.institution){
            return (<Redirect to={{pathname: "/institution", state: {institution_name:this.state.institution_name,institution_type: this.state.institution_type,institution_num:this.state.institution_num}}}/>)
        }
        return(
            <div className="container-fluid jumbotron-fluid" style={{marginTop:"65px"}} className="align-content-center">
                <h2 className="text-center font-weight-bold">Contosso-App</h2>
                    <form style={{border:"3px black radius",padding:'40px'}}
                          className="border border-primary rounded" noValidate
                          onSubmit={
                              event => {
                                  event.preventDefault();
                                  this.getConnexion();
                              }
                          }
                    >
                        <fieldset>
                        <legend className="text-center font-weight-bold">Connexion</legend>
                        <div className="form-group">
                            <label htmlFor="pseudo"><span className="fa fa-user-circle-o"> Pseudo</span></label>
                            <input type="text" placeholder="Entrez le pseudo" className="form-control"
                                value={this.state.pseudo} required onChange={
                                (event)=>{
                                this.setState({pseudo:event.target.value})
                                }
                            }/>
                            <div className="valid-feedback">
                                <span className="fa fa-check"></span>
                            </div>
                            <div className="invalid-feedback">
                                <span className="fa fa-crosshairs"></span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="mdp"><span className="fa fa-lock"> Mot de passe</span></label>
                            <input type="password" placeholder="Entrez le mot de passe" className="form-control"
                                   value={this.state.mdp}
                                   onChange={event => {
                                       this.setState({mdp:event.target.value})
                                   }}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">SE CONNECTER</button>
                        </div>
                            {
                                this.state.message ? <p className="font-weight-bold bg-primary">{this.state.message}</p> : <p></p>
                            }
                            <p>Pas encore abonné ? <Link to="/register">Abonnez-vous !</Link></p>
                        </fieldset>
                    </form>
            </div>
        )

    }

}