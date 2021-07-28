import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { useState } from "react";
import List from "./components/List";

const {default: Form} = require("./components/Form");

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSubmit = () => {
    const newTodo = {
      title: inputValue,
      isDone: false,
    };
    const nextTodos = [...todos];
    nextTodos.push(newTodo);
    setTodos(nextTodos);
    setInputValue("");
  };

  const handleDelete = (i) => {
    const nextTodos = [...todos];
    nextTodos.splice(i, 1);
    setTodos(nextTodos);
  };

  const handleDone = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isDone = true;
    setTodos(nextTodos);
  };

  const handleUndone = (i) => {
    const nextTodos = [...todos];
    nextTodos[i].isDone = false;
    setTodos(nextTodos);
  }

  return (
    <div className="App">
      <List
        todos={todos}
        handleDelete={handleDelete}
        handleUndone={handleUndone}
        handleDone={handleDone}
      />
      <Form
        inputValue={inputValue}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}
/*const List = props => (
  <div>
    {props.items.map((item, index) => (
      <div className={className = isDone? Done : NotDone}>
        <li key={index}>{item}</li>
        <button onClick={items.splice(index, 1)}> X </button>
        ))}
      </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      isDone: false,
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render () {
    return(
      <div className="App">
        <List items={this.state.items} />
        <form className="Form" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
*/
export default App;
