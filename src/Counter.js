


export default function Counter(props){

    return (
   
    );
}

export default class App extends Component {

    render() {
      return (
    <div>
        <h2>Counter: {props.number} </h2>
        <input type="button" value="add" onClick={props.add}/>
        <input type="button" value="subtract" onClick={props.subtract}/>
    </div>
      );
    }
  }