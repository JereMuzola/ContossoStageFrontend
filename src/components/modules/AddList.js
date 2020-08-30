import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

export default function AddList(props){
    const [AllIntitutions,setAllInstitutions]=useState([])
    const promotions_primaire=['Première primaire','Deuxième primaire','troisième primaire','Quatrième primaire',
    'Cinquième primaire','Sixième primaire','Première secondaire','Deuxième secondaire','troisième secondaire','Quatrième secondaire',
        'Cinquième secondaire','Sixième secondaire']
    const promotions_universite=['Premier graduat','Deuxième graduat','Troisième graduat','Première licence','Deuxième licence']
    const sexes=['Masculin','Feminin']
    const [matricule,setMAtricule]=useState('')
    const [nom,setNom]=useState('')
    const [postnom,setPostnom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [sexe,setSexe]=useState('')
    const [dn,setDn]=useState('');
    const [ln,setLn]=useState('')
    const [insTypt,setInsType]=useState(props.institution_type)
    const [instNum,setInstNum]=useState(props.institution_num)
    const [adresse,setAdresse]=useState('')
    const [promotion,setPromotion]=useState(insTypt==="Université"?promotions_universite[0]:promotions_primaire[0])
    const [texte,setTexte]=useState('')

   /* async function getAllInstitution(){
        await axios.get('https://localhost:8000/api/institution')
            .then(response=>{
                setAllInstitutions(response.data)
            }).catch(error=>{
                console.log("Error :"+error)
            })
    }*/
    async function addEtudiant(){
        await axios.post('http://localhost:8000/api/etudiant',
            {
                matricule:matricule,
                nom:nom,
                postnom:postnom,
                prenom:prenom,
                dn:dn,
                ln:ln,
                adr:adresse,
                sexe:sexe,
                prom:promotion,
                inst:instNum
            }).then(response=>{
                setTexte(response.data.message)
                texte?alert(texte):alert('Problème')
                setNom("")
                setPostnom('')
                setPromotion(insTypt==="Université"?promotions_universite[0]:promotions_primaire[0])
                setPrenom('')
                setAdresse('')
                setDn('')
                setLn('')
                setSexe(sexes[0])
                setMAtricule('')

        }).catch(error=>{
            console.log("Error :"+error)
        })
    }

    useEffect(()=>{
        //getAllInstitution();
    })

    return(
        <div className="container-fluid jumbotron-fluid">
            <h2 className="text-center font-weight-bold">Contosso-App</h2>
            <form style={{border:"3px black radius",padding:'40px'}} className="border border-primary rounded"
                  noValidate
                  onSubmit={event => {
                      event.preventDefault()
                      addEtudiant()
                  }}
            >
                <fieldset>
                    <legend className="text-center font-weight-bold">Connexion</legend>
                    <div className="form-group">
                        <label htmlFor="matricule">Matricule</label>
                        <input className="form-control" value={matricule} onChange={event => setMAtricule(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input className="form-control" value={nom} onChange={event => setNom(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="postnom">Postnom</label>
                        <input className="form-control" value={postnom} onChange={event => setPostnom(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom">Prénom</label>
                        <input className="form-control" value={prenom} onChange={event => setPrenom(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="sexe">Sexe</label>
                        <div className="form-check-inline">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input"
                                       value={sexes[0]} name="sexe" checked={setSexe(sexes[0])}/>{sexes[0]}
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" className="form-check-input"
                                       value={sexes[1]} name="sexe" checked={setSexe(sexes[1])}/>{sexes[1]}
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dn">Date et Lieu de naissance</label>
                        <div className="row">
                            <input type="date" value={dn} className="col-2 form-control"
                                   style={{marginLeft:"18px",marginRight:"45px"}}
                                   onChange={
                                       event => setDn(event.target.value)
                                   }
                            />
                            <input type="text" value={ln} className="col-8 form-control"
                            onChange={
                                event => setLn(event.target.value)
                            }
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="promotion">Promotion</label>
                        {
                            (insTypt==='Université')?
                            <select value={promotion} className="form-control"
                            onChange={event => setPromotion(event.target.value)}>
                            {
                                promotions_universite.map(
                                    prom=> <option key={prom}>{prom}</option>
                                )
                            }
                            </select> : <select value={promotion} className="form-control"
                                                onChange={event => setPromotion(event.target.value)}>
                                    {
                                        promotions_primaire.map(
                                            prom=> <option key={prom}>{prom}</option>
                                        )
                                    }
                                </select>

                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="adresse">Adresse</label>
                        <textarea className="form-control"
                                  value={adresse}
                        onChange={event => setAdresse(event.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">INSCRIRE</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}