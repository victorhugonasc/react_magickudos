import React, { Component } from 'react';


class KudoCard extends Component{
    render() {
        
        const kudo = this.props.kudo; 

        /*changeBackground = (backGround) => {
            switch (backGround){
                case "congrats" :
                    style={
                        background: url("../../../Images/congrats.jpg"),
                    }    
                ;
            }
        }*/

   

        return(
            <div class="card">
                <div class="card-image"></div>
              
                <div class="card-text" >
                    <span class ="date" > 4 dias atras </span>
                    <h4>From: {kudo.sender}</h4>
                    <h2>To: {kudo.receiver}</h2>
                    <p>{kudo.message}</p>
                </div>    

                <div class="card-stats"></div>   
            </div>
        );
    }
    
}

export default KudoCard;