import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom'
import Button from '../button';
import './styles.css';

export default () => {
    const btnText="Saiba mais";
    const [engage, setData] = useState([]);
    useEffect(()=>{
        firebase.database()
        .ref('missoes/campanhas')
        .once('value')
        .then(snapshot=>{console.log(snapshot.toJSON()); setData(snapshot.toJSON())})
    }, []);
    return (
        <div className="page-padding">
            <h1>Faça parte</h1>
            <div className="engage-content">
            {
                engage[0] && 
                <div>
                    <h2>{engage[0].nome}</h2>
                    <p>{engage[0].descricao}</p>
                    <Link to="/missao/campanha/0"><Button outline text={btnText}/></Link>
                </div>
            }
            {
                engage[1] && 
                <div>
                    <h2>{engage[1].nome}</h2>
                    <p>{engage[1].descricao}</p>
                    <Link to="/missao/campanha/1"><Button outline text={btnText}/></Link>
                </div>
            }
            {
                engage[2] && 
                <div>
                    <h2>{engage[2].nome}</h2>
                    <p>{engage[2].descricao}</p>
                    <Link to="/missao/campanha/2"><Button outline text={btnText}/></Link>
                </div>
            }
            </div>
        </div>
    )
};