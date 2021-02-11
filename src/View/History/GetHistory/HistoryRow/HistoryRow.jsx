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
        kudoWidth: 600
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
        let listWitdh = value * this.state.kudoWidth;

        if ((window.innerWidth - listWitdh) > newScrollX) {
            newScrollX = (window.innerWidth - listWitdh);
        }
        this.setState({
            scrollX: newScrollX
        });
    }

    render() {
        return (
            <div className="historyRow">

                <h4> {this.state.user.name} </h4>
                   
                {this.state.kudos.length > 0 &&
                    <div className="historyArea">
                    
                    <h5> {this.state.kudos.length} </h5>
                    
                        {this.state.kudos.length > 3 &&
                            <div>
                                <div className="historyRow--previous" onClick={this.handlePreviousClick}>
                                    <NavigateBeforeIcon style={{ fontsize: 50 }} />
                                </div>
                            
                                <div className="historyRow--next" onClick={this.handleNextClick.bind(this, this.state.kudos.length)}>
                                    <NavigateNextIcon style={{ fontsize: 50 }} />
                                </div>
                            </div>
                        }
                        
                        <div className="historyList" style={{ marginLeft: this.state.scrollX, width: (this.state.kudoWidth * this.state.kudos.length)}}>
                            {this.state.kudos.map((kudo, key) => {
                                const colorPallete = this.props.pallete.filter(color => kudo.layout === color.kudosType);
                                return <KudoCard kudo={kudo} colorPallete={colorPallete} isEditable={false} key={key} />
                            })}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default HistoryRow;