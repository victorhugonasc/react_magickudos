import React, { Component } from 'react';
import './HistoryRow.css';
import KudoCard from '../../../Kudo/GetKudos/KudoCard/KudoCard';

class HistoryRow extends Component {

    state = {
        user: this.props.user,
        kudos: this.props.kudos,
        pallete: this.props.pallete,
    }

    filterKudos = () => {
       return this.state.kudos.filter(kudo => kudo.receiver === this.state.user.name);
        //FILTRAR TAMBEM POR NICKNAMES
    }

    render() {
        const filteredKudo = this.filterKudos();
        return (
            <div>
                <h4> {this.state.user.name} </h4>
                {filteredKudo.length > 0 &&
                    filteredKudo.map((kudo, key) => {
                        const colorPallete = this.props.pallete.filter(color => kudo.layout === color.kudosType);
                        return <KudoCard kudo={kudo} colorPallete={colorPallete} key={key} />
                    })
                    
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