import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import KudoCard from './KudoCard';
import './KudosList.css';

import prevImage from '../../../Images/Arrows/prev.svg';
import nextImage from '../../../Images/Arrows/next.svg';

class KudosList extends Component{

    constructor (props){
        super(props);
        this.deleteKudo = this.deleteKudo.bind(this);
        this.updateKudo = this.updateKudo.bind(this);
    }

    state = {
        counter: 0,
        kudosUnread: 0,
        index: 0,
    }

    componentDidMount() {
        this.props.fetchKudos();
    }

    deleteKudo (kudo) {
        this.props.deleteKudo(kudo);
    }

    updateKudo = (kudo) => {
        this.props.updateKudo(kudo);
    }

    updateMargin = () => {
        let newMargin = (this.state.counter * document.body.clientWidth);
        document.querySelector('.kudoContainer').style.marginLeft = `-${newMargin}px`;
    }

    handlePrevClick = () => {
        let counter = this.state.counter - 1;
        
        if(counter >= 0)
        {
            this.setState({ counter},() => {
                this.updateMargin();
            });
        }
       
    }

    handleNextClick = (value) => {
        let counter = this.state.counter + 1;
        console.log(counter,this.state.kudosUnread)
        if(counter < value)
        {
            this.setState({ counter},() => {
                this.updateMargin();
                this.updateQtyKudo();
            });
        }

    }

    calculateUnreadKudo = (kudosUnread) => {
        this.setState({kudosUnread});
    }

    updateQtyKudo = () => {
        let kudosUnread = this.state.kudosUnread - 1;
        this.setState({kudosUnread});
    }


    render() { 
        
        const rows = this.props.kudos.map((kudo) => {
            return <KudoCard kudo={kudo} id={kudo.id} key={kudo.id} deleteKudo={this.deleteKudo} updateKudo={this.updateKudo}/>
        });

        return(
            <div className= "kudosList" onLoad={this.calculateUnreadKudo.bind(this, rows.length)}>
                <h5 className="header--message">{this.state.kudosUnread > 0 ? this.state.kudosUnread : rows.length} Kudo{this.state.kudosUnread !== 1 ? 's' : '' } Unread</h5>
                <div className="kudoContainer">

                    <div className="prevButton">
                    <   img className="prev" src={prevImage} alt="previous" onClick={this.handlePrevClick} />
                    </div>
                   
                    <div className="nextButton">
                        <img className="next" src={nextImage} alt="next" onClick={this.handleNextClick.bind(this, rows.length, rows.index)} />
                    </div>
                    
                    {rows}
                </div>
            </div>
        );
    }
}

KudosList.propTypes = {
    kudos: PropTypes.array.isRequired,
    fetchKudos: PropTypes.func.isRequired,
    updateKudo: PropTypes.func.isRequired,
    deleteKudo: PropTypes.func.isRequired
}

export default KudosList;

