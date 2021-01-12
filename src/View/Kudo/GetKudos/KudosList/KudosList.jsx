import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Carousel from 'react-bootstrap/Carousel';
import KudoCard from '../KudoCard/KudoCard';
import './KudosList.css';

class KudosList extends Component{

    componentDidMount() {
        this.props.fetchKudos();
        this.props.fetchColorPallete();
    }

    deleteKudo = (kudo) => {
        this.props.deleteKudo(kudo);
    }

    updateKudo = (kudo) => {
        this.props.updateKudo(kudo);
    }
    
    render() { 
        return (
            <div className= "kudosList">
                <div className="kudoContainer">
                    <Carousel fade={true} interval={null}>
                        {this.props.kudos.map((kudo) => {
                            const colorPallete = this.props.pallete.filter(color => kudo.layout === color.kudosType);
                            return (
                                <Carousel.Item key={kudo.id}>
                                    <KudoCard kudo={kudo} colorPallete={colorPallete} key={kudo.id} deleteKudo={this.deleteKudo.bind(this)} updateKudo={this.updateKudo.bind(this)} />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
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

