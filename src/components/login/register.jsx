import React, {useState} from "react";
import  axios from 'axios'
import {Link, Redirect} from "react-router-dom";
export default function Register(){
    const types=["Ecole","Université","Institut supérieure"]
    const [redirect,setRedirect]=useState(false)
    const Provinces=['Bas-Uele','Equateur','Haut-Katanga','Haut-Lomami','Haut-Uele','Ituri','Kassai','Kasai-Centrale','Kasai-Orientale','Kinshasa','Kongo-Centrale','Kwango','Kwilu','Lomami','Lualaba','Mai-Ndombe','Maniema','Mongala','Nord-Kivu','Nord-Ubangi','Sankuru','Sud-Kivu','Sud-Ubangi','Tanganyka','Tshopo','Tshuapa']
    const [message,setMessage]=useState('');
    const [nom,setNom]=useState('')
    const [typeInst,setTypeInst]=useState(types[0])
    const [adresse,setAdresse]=useState('')
    const [pseudo,setPseudo]=useState('')
    const [province,setProvince]=useState(Provinces[0])
    const [password,setPassword]=useState('')
    const [passwordConfirm,setPasswordConfirm]=useState('')


    async function addInstitution(){
        await axios.post('http://localhost:8000/api/institution',{
            nom:nom,
            type_inst:typeInst,
            adresse:adresse,
            pseudo:pseudo,
            province:province,
            password:password
        }).then(response=>{
            setMessage(response.data.message)
            setRedirect(true);
            setNom('')
            setPasswordConfirm('')
            setPassword('')
            setTypeInst('')
            setPseudo('')
            setProvince('')
            setAdresse('')
            if(redirect){
                return <Redirect to="/"/>
            }
        }).catch(error=>{
            console.log("Error :"+error)
        })
    }

    return(
        <div className="container-fluid jumbotron-fluid" style={{marginTop:"65px"}}>
            <h2 className="text-center font-weight-bold">Contosso-App</h2>
            <form onSubmit={
                event => {
                    event.preventDefault();
                    addInstitution();
                }
            } style={{border:"3px black radius",padding:'40px'}} className="border border-primary rounded">
                <fieldset>
                    <legend className="text-center font-weight-bold">Abonnement</legend>
                    {
                        message?<p className="font-weight-bold bg-primary">{message}</p>:<p className="font-weight-bold bg-primary"></p>
                    }
                    <div className="form-group">
                        <label htmlFor="nom">Nom de l'institution</label>
                        <input type="text" id="nom" className="form-control"
                        placeholder="Nom de l'institution" value={nom}
                        onChange={event => {
                            setNom(event.target.value)
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type d'institution</label>
                        <select className="form-control" value={typeInst} onChange={event => {
                            setTypeInst(event.target.value);
                        }}>
                            {
                                types.map(typ=>{
                                    return (
                                        <option key={typ}>{typ}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse</label>
                        <textarea className="form-control" id="adresse"
                        value={adresse} onChange={event => {
                            setAdresse(event.target.value)
                        }}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="province">Province</label>
                        <select className="form-control" value={province}
                        onChange={event => {
                            setProvince(event.target.value)
                        }}>
                            {
                                Provinces.map(provinc=>{
                                    return (
                                        <option key={provinc}>{provinc}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pseudo">Pseudo</label>
                        <input type="text" id="pseudo" value={pseudo}
                        className="form-control" onChange={event => {
                            setPseudo(event.target.value)
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de Passe</label>
                        <input type="password" id="passwoord"
                        value={password} className="form-control"
                        onChange={event => {
                            setPassword(event.target.value)
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Confirmer le mot de Passe</label>
                        <input type="password" id="passwoord1"
                               value={passwordConfirm} className="form-control"
                               onChange={event => {
                                   setPasswordConfirm(event.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Valider</button>
                    </div>
                    <p><Link to="/">Connectez-vous</Link></p>
                </fieldset>
            </form>
        </div>
    )
}