import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { Actions } from '../../redux/sagas';

class HomeController extends Component {
    componentDidMount(){
        this.props.actionChangeStateField('menuSelected', 'home')
    }
    render(){
        return (
            <View value={this.props.Commons.value}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Actions, dispatch)
)(HomeController);