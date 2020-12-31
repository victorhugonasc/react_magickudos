import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import KudoCard from './KudoCard';
import './KudosList.css';

import prevImage from '../../../Images/Arrows/prev.svg';
import nextImage from '../../../Images/Arrows/next.svg';

class KudosList extends Component{

    state = {
        kudosUnread: 0,
        scrollX: 0,
    }

    componentDidMount() {
        this.props.fetchKudos();
        this.props.fetchColorPallete();
    }

    deleteKudo (kudo) {
        this.props.deleteKudo(kudo);
    }

    updateKudo = (kudo) => {
        this.props.updateKudo(kudo);
    }

    handlePrevClick = () => {
        let scrollX = this.state.scrollX + Math.round(window.innerWidth / 2);

        if (scrollX > 0) {
            scrollX = 0;
        }
        this.setState({ scrollX });
    }

    handleNextClick = (value) => {
        let scrollX = this.state.scrollX - Math.round(window.innerWidth / 2);
        let widthList = value * 600;

        if ((window.innerWidth - widthList) > scrollX) {
            scrollX = (window.innerWidth - widthList) - 60;
        }
        this.setState({ scrollX });
        this.updateQtyKudo();
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
            const colorPallete = this.props.pallete.filter(color => kudo.layout === color.kudosType);
            return <KudoCard kudo={kudo} colorPallete={colorPallete} key={kudo.id} deleteKudo={this.deleteKudo.bind(this)} updateKudo={this.updateKudo.bind(this)} />
        });

        return(
            <div className= "kudosList" onLoad={this.calculateUnreadKudo.bind(this, rows.length)}>
                <h5 className="header--message">{this.state.kudosUnread > 0 ? this.state.kudosUnread : rows.length} Kudo{this.state.kudosUnread !== 1 ? 's' : '' } Unread</h5>
                <div className="prevButton">
                    <img className="prev" src={prevImage} alt="previous" onClick={this.handlePrevClick} />
                </div>
                   
                <div className="nextButton">
                    <img className="next" src={nextImage} alt="next" onClick={this.handleNextClick.bind(this, rows.length)} />
                </div>

                <div className="kudoContainer">
                    <div className="kudoRow" style={{
                        marginLeft: this.state.scrollX,
                        width: (rows.length * 600) + 60
                    }}>
                        {rows}
                    </div>
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

