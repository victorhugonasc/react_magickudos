import React, { Component } from 'react';


class KudoRow extends Component{

    render() { 

        const kudo = this.props.kudo; 

        return(
            <div>
                <h4>Sender: {kudo.sender} Receiver: {kudo.receiver} Message: {kudo.message} Layout: {kudo.layout}</h4>   
            </div>
        );
    }
}
export default KudoRow;

