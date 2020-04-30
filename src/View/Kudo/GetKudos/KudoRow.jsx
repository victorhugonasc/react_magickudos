import React, { Component } from 'react';


class KudoRow extends Component{
    render() { 

       const kudo = this.props.kudo; 
        return( 
        <tr>
            <td>{kudo.sender}</td>
            <td>{kudo.receiver}</td>
            <td>{kudo.message}</td>
            <td>{kudo.layout}</td>
        </tr>
        );
    }
}
export default KudoRow;

