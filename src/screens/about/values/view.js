import React, {useState, useEffect} from 'react';
import firebase from "firebase";
import Card from '../../../components/card';
import Button from '../../../components/button';
import './styles.css';

export default props => {
    const [url, setData] = useState();

    useEffect(() => {
        firebase.storage()
        .ref()
        .child('valores/Nossos Valores.pdf')
        .getDownloadURL()
        .then(path=>setData(path));
    }, []);

    return (
        <>
            <div className="valuesHeader">
                <h1>Nossos Valores</h1>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <Button text="Baixe o PDF"
                        disabled={!url}
                        outline
                        icon={require('../../../assets/images/download.svg')}/>
                </a>
            </div>
            {props.valueData && Object.keys(props.valueData).map(key => {
                return <Card youtubeID={props.valueData[key].youtubeID} key={key} title={props.valueData[key].nome} desc={props.valueData[key].texto} />
            })}
        </>
    );
};
