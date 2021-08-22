import React, {Component} from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";
import { bindActionCreators } from 'redux';
import View from './view';
import { Actions } from '../../redux/sagas';

class MissionController extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: {},
            image: null
        }
    }
    componentDidMount(){
        this.props.actionChangeStateField('menuSelected', 'mission');
        
        firebase.database()
        .ref("missoes/home")
        .once("value")
        .then(snapshot => this.setState({data: snapshot.toJSON()}));

        firebase.storage()
        .ref('missoes/home.png')
        .getDownloadURL()
        .then(path=>this.setState({image: path}))

    }
    render(){
        return (
            <View {...this.state}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Actions, dispatch)
)(MissionController);