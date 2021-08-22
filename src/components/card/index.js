import React, {useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import firebase from "firebase";
import './styles.css';

export default props => {
    const [url, setData] = useState();
    const [maxDescSize, setMaxDescSize] = useState(1000);

    useEffect(() => {
        if(props.image)
            firebase.storage()
            .ref()
            .child(props.image)
            .getDownloadURL()
            .then(path=>setData(path));
    }, [props.image]);

    const descSize = props.desc?.length;

    return (
        <div className="card">
            {props.youtubeID ? 
                <YouTube videoId={props.youtubeID} opts={{width: 350, height:200}} /> :
                <img className="cardImg" src={url || require('../../assets/images/no-image.png')} alt={props.title} title={props.title} />
            }
            <div className="cardContainer">
                <h3>{props.title}</h3>
                <p>{descSize > maxDescSize ? props.desc.substring(0, maxDescSize)+"..." : props.desc}</p>
                {
                    descSize > maxDescSize && 
                    <div onClick={()=>setMaxDescSize(Number.MAX_SAFE_INTEGER)}>
                        <img src={require('../../assets/images/arrow-down.svg')} alt={"Ver mais"} />
                        <p className="colorPrimaryBlue">Ver mais</p>
                    </div>
                }
                {
                    maxDescSize === Number.MAX_SAFE_INTEGER && 
                    <div onClick={()=>setMaxDescSize(1000)}>
                        <img src={require('../../assets/images/arrow-up.svg')} alt={"Ver menos"} />
                        <p className="colorPrimaryBlue">Ver menos</p>
                    </div>
                }
            </div>
        </div>
    )
};