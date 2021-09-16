import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import YouTube from 'react-youtube';
import Loader from '../../components/loader';

export default () => {
    const [valores, setValores] = useState();
    const [loading, setLoading] = useState(false);
    const [pdf, setPDF] = useState();

    useEffect(() => {
        firebase.database()
        .ref("aibms/valores")
        .once("value")
        .then(snapshot => setValores(snapshot.toJSON()));
    }, []);

    if(!valores || loading) return <Loader/>

    return (
        <div>
            <h2>Valores da IBMS</h2>

            {Object.keys(valores).map(key => (
                <div>
                    <div>
                        <label>Nome: </label>
                        <input type="text" value={valores[key].nome} onChange={event=>setValores({...valores, [key]: {...valores[key], nome: event.target.value}})}/>
                    </div>
                    <div>
                        <label>Texto: </label>
                        <textarea value={valores[key].texto} onChange={event=>setValores({...valores, [key]: {...valores[key], texto: event.target.value}})}/>
                    </div>
                    <div>
                        <label>ID do video do YouTube: </label>
                        <input type="text" value={valores[key].youtubeID} onChange={event=>setValores({...valores, [key]: {...valores[key], youtubeID: event.target.value}})}/>
                        <YouTube videoId={valores[key].youtubeID} opts={{width: 150, height:100}} />
                    </div>
                    <input type="button" value="Excluir valor" onClick={() => {
                        let newValues = {};
                        Object.keys(valores).forEach(key2 => {
                            if(key2 !== key) newValues[key2] = valores[key2];
                        });
                        setValores(newValues);
                    }}/>
                    <hr/>
                </div>
            ))}

            <input type="button" value="Adicionar novo valor" onClick={() => {
                setValores({...valores, [(Object.keys(valores).length)+1]: {
                    nome:"", texto:"", youtubeID:""
                }});
            }}/>

            <input type="button" value="Salvar Valores" onClick={() => {
                setLoading(true);
                firebase.database()
                .ref("aibms/valores").set(valores, ()=>setLoading(false))
                .catch(error => {
                    alert(error.message || error);
                    setLoading(false);
                });
            }}/>

            <br/>
            <br/>
            <br/>

            <div>
                <h3>Atualizar PDF dos valores da IBMS</h3>
                <input type="file" onChange={event=>setPDF(event.target.files[0])}/>

                <input type="button" value="Upload PDF" onClick={() => {
                    if(!pdf){
                        alert("Selecione um PDF");
                        return;
                    }
                    setLoading(true);
                    firebase.storage().ref().child('valores/Nossos Valores.pdf').put(pdf)
                    .then(()=>setLoading(false))
                    .catch(error => {
                        alert(error.message || error);
                        setLoading(false);
                    });
                }} />
            </div>
        </div>
    );
}