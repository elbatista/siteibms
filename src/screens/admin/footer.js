import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import Loader from '../../components/loader';

export default () => {
    const [footer, setFooter] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        firebase.database()
        .ref("footer")
        .once("value")
        .then(snapshot => setFooter(snapshot.toJSON()));
    }, []);

    if(!footer || loading) return <Loader/>

    return (
        <div>
            <div>
                <h2>Dados do Footer</h2>
                <label>Copyright:</label>
                <input type="text" value={footer.copyright} onChange={event=>setFooter({...footer, copyright: event.target.value})}/>
            </div>

            <div>
                <label>Linhas:</label>

                {Object.keys(footer.linhas).map(key => {
                    return (
                        <div>
                            <input type="text" value={footer.linhas[key]} onChange={event=>setFooter({...footer, linhas: {
                                ...footer.linhas, [key]: event.target.value
                            }})}/>
                            <input type="button" value="Excluir linha" onClick={() => {
                                let result = {};
                                Object.keys(footer.linhas).forEach(key2 => {
                                    if (key !== key2){
                                        result[key2] = footer.linhas[key2];
                                    }
                                });
                                setFooter({
                                    ...footer,
                                    linhas: result
                                });
                            }}/>
                        </div>
                    );
                })}

                <input type="button" value="Adicionar linha" onClick={() => {
                    setFooter({...footer, linhas: {
                        ...footer.linhas,
                        [(Object.keys(footer.linhas).length)+1]: ""
                    }});
                }}/>

                <input type="button" value="Salvar" onClick={() => {
                    setLoading(true);
                    firebase.database()
                    .ref("footer").set(footer, ()=>setLoading(false))
                    .catch(error => {
                        alert(error.message || error);
                        setLoading(false);
                    });
                }}/>
            </div>
        </div>
    );
}