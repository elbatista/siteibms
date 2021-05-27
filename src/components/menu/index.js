import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import View from './view';
import { Actions } from '../../redux/sagas';

class MenuController extends Component {
    constructor(props){
        super(props)
        this.state = {
            submenuopened: null
        }
    }
    render(){
        return (
            <View 
                menuSelected={this.props.Commons.menuSelected} 
                submenuopened={this.state.submenuopened}
                setSubmenu={submenu=>this.setState({submenuopened: submenu})}/>
        )
    }
} 

export default connect(
    state=>({Commons: state.Commons}),
    dispatch=>bindActionCreators(Actions, dispatch)
)(MenuController);