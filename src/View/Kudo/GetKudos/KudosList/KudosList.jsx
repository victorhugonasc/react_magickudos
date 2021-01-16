import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Carousel from 'react-bootstrap/Carousel';
import KudoCard from '../KudoCard/KudoCard';
import './KudosList.css';

import { FloatingButton, Item } from "react-floating-button";
import plusIcon from '../../../../Images/Icons/plus.svg';
import perfilIcon from '../../../../Images/Icons/perfil.svg';
import sendIcon from '../../../../Images/Icons/send.svg';

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

    storeKudos = () => {
        this.props.storeKudos();
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

                    <FloatingButton backgroundColor="#1da88a">
                        <Item
                            imgSrc={plusIcon}
                            backgroundColor="#fff"
                            onClick={() => {
                                console.log("plus click");
                                //mandar pra pagina de criar kudos
                            }}
                        />
                        <Item
                            imgSrc={perfilIcon}
                            backgroundColor="#fff"
                            onClick={() => {
                                console.log("perfil click");
                                //mandar pra pagina de perfil
                            }}
                        />
                        <Item
                            imgSrc={sendIcon}
                            backgroundColor="#fff"
                            onClick={() => {
                                console.log("send click");
                                this.storeKudos();
                                //mandar pra pagina de perfil
                            }}
                        />
                    </FloatingButton>
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

