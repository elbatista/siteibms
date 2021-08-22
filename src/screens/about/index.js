import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { Actions } from '../../redux/sagas';
import { withRouter } from "react-router";

class AboutController extends Component {
    componentDidMount(){
        this.props.actionChangeStateField('menuSelected', 'about')
    }
    render(){
        return (
            <View Commons={this.props.Commons} change={this.props.sagaTeste} {...this.props}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Actions, dispatch)
)(withRouter(AboutController));