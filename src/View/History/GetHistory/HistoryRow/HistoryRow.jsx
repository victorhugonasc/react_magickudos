import React, { Component } from 'react';
import './HistoryRow.css';
import KudoCard from '../../../Kudo/GetKudos/KudoCard/KudoCard';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

class HistoryRow extends Component {

    state = {
        user: this.props.user,
        kudos: this.props.kudos,
        pallete: this.props.pallete,
        scrollX: 0,
    }

    filterKudos = () => {
       return this.state.kudos.filter(kudo => kudo.receiver === this.state.user.name);
        //FILTRAR TAMBEM POR NICKNAMES
    }

    handlePreviousClick = () => {
        let newScrollX = this.state.scrollX + Math.round(window.innerWidth / 2);
        if (newScrollX > 0) {
            newScrollX = 0
        }

        this.setState({
            scrollX: newScrollX
        });
    }

    handleNextClick = (value) => {
        let newScrollX = this.state.scrollX - Math.round(window.innerWidth / 2);
        let listWitdh = value * 600;

        if ((window.innerWidth - listWitdh) > newScrollX) {
            newScrollX = (window.innerWidth - listWitdh);
        }
        this.setState({
            scrollX: newScrollX
        });
    }

    render() {
        const filteredKudo = this.filterKudos();
        return (
            <div className="historyRow">

                <h4> {this.state.user.name} </h4>
                   
                {filteredKudo.length > 0 &&
                    
                    <div className="historyArea">
                        {filteredKudo.length > 3 &&
                            <div>
                                <div className="historyRow--previous" onClick={this.handlePreviousClick}>
                                    <NavigateBeforeIcon style={{ fontsize: 50 }} />
                                </div>
                            
                                <div className="historyRow--next" onClick={this.handleNextClick.bind(this, filteredKudo.length)}>
                                    <NavigateNextIcon style={{ fontsize: 50 }} />
                                </div>
                            </div>
                        }
                        
                        <div className="historyList" style={{ marginLeft: this.state.scrollX, width: (600 * filteredKudo.length) }}>
                            {filteredKudo.map((kudo, key) => {
                                const colorPallete = this.props.pallete.filter(color => kudo.layout === color.kudosType);
                                return <KudoCard kudo={kudo} colorPallete={colorPallete} key={key} />
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default HistoryRow;

/*TO DO*/
//Filtrar todos os kudos pertencentes a this.state.user
//Chamar um componente que renderiza kudos


//ideal eh filtrar na classe pai, pois so devemos chamar esse componente aqui caso haja pelo menos um kudo para o user em questao