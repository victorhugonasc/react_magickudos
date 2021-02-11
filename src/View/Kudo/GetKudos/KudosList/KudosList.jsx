import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import Carousel from 'react-bootstrap/Carousel';
import KudoCard from '../KudoCard/KudoCard';
import { createKudos, getHistory } from '../../../../Routes';
import './KudosList.css';
import ReactLoading from "react-loading";

import { FloatingButton, Item } from "react-floating-button";
import plusIcon from '../../../../Images/Icons/plus.svg';
import perfilIcon from '../../../../Images/Icons/perfil.svg';
import sendIcon from '../../../../Images/Icons/send.svg';
import noKudosImage from '../../../../Images/Cards/noKudos.png';

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
            <div className="kudosList">
                {this.props.fetch &&
                    <div className="loading">
                        <ReactLoading type={"spin"} color="#1da88a" />
                    </div>
                }
                {this.props.kudos.length > 0
                    ?
                    <div className="kudoContainer">
                        <Carousel fade={true} interval={null}>
                            {this.props.kudos.sort((a, b) => b.date > a.date ? 1 : -1).map((kudo) => {
                                const colorPallete = this.props.pallete.filter(color => kudo.layout === color.kudosType);
                                return (
                                    <Carousel.Item key={kudo.id}>
                                        <KudoCard kudo={kudo} colorPallete={colorPallete} isEditable={true} key={kudo.id} deleteKudo={this.deleteKudo.bind(this)} updateKudo={this.updateKudo.bind(this)} />
                                    </Carousel.Item>
                                )
                            })}
                        </Carousel>

                        <FloatingButton backgroundColor="#1da88a">
                            <Item
                                imgSrc={plusIcon}
                                backgroundColor="#fff"
                                onClick={() => {
                                    window.location.href = process.env.REACT_APP_FRONTEND_DOMAIN + createKudos;
                                }}
                            />
                            <Item
                                imgSrc={perfilIcon}
                                backgroundColor="#fff"
                                onClick={() => {
                                    window.location.href = process.env.REACT_APP_FRONTEND_DOMAIN + getHistory;
                                }}
                            />
                            <Item
                                imgSrc={sendIcon}
                                backgroundColor="#fff"
                                onClick={() => {
                                    this.storeKudos();
                                    window.location.href = process.env.REACT_APP_FRONTEND_DOMAIN + getHistory;
                                }}
                            />
                        </FloatingButton>
                    </div>
                    :
                    <div className="noKudosToShow">
                        <img alt="No Kudos to Show" src={noKudosImage} draggable="false" />
                        <h5>0 new Kudos</h5>
                    </div>
                }
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

