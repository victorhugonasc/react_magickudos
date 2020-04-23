import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getKudos} from '../actions/KudoAction';


 class KudoGet extends Component{

    onClick = (event) => {
        event.preventDefault();
        this.props.getKudos();
    };


    render() { 
        return (
        <div>
            <h3>Get Kudos</h3>
            
            <button onClick={() => this.onClick(event)}>Get Kudos</button>
        </div>
        );
    }

}

const mapStateToProps = (state) => {
    return{
       // kudos: state.kudo
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getKudos: () => dispatch(getKudos()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (KudoGet)