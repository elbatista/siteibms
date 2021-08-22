import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from "firebase";
import { bindActionCreators } from 'redux';
import View from './view';
import { Actions } from '../../../redux/sagas';

const MissionEngageController = props => {
    const [data, setData] = useState();
    const [image, setImage] = useState();
    const {id} = useParams();

    useEffect(()=>{
        props.actionChangeStateField('menuSelected', 'mission');

        firebase.database()
        .ref(`missoes/campanhas`)
        .once("value")
        .then(snapshot => setData(snapshot.toJSON()));

        firebase.storage()
        .ref(`missoes/campanhas/campanha${id}.png`)
        .getDownloadURL()
        .then(path=>setImage(path));

    },[props,id]);

    return (
        <View data={data?data[id]:null} image={image}/>
    )
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Actions, dispatch)
)(MissionEngageController);