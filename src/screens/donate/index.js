import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { Actions } from '../../redux/sagas';

class DonateController extends Component {
    componentDidMount(){
        this.props.actionChangeStateField('menuSelected', 'donate')
    }
    render(){
        return (
            <View Commons={this.props.Commons} change={this.props.sagaTeste}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Actions, dispatch)
)(DonateController);