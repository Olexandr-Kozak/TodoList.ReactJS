import React from 'react'
import style from './App.module.css';
import Header from "./Header/Header";
import ListBody from "./ListBody/ListBody";
import Footer from "./Footer/Footer";
import {v4} from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isCheck:false

    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }

  handleCheck(){
    if (this.state.isCheck){
      this.setState({
        isCheck : true
      })
      console.log('Its Checked')
    }
  }

  handleDelete(id) {
    const filteredList = this.state.todoList.filter(el => el.id !== id);
    this.setState({
      todoList: filteredList
    })
  }

  handleAdd(todoItem) {
    const todoList = [...this.state.todoList, todoItem]
    this.setState({

      todoList
    })
  }

  render() {
    return (
      <div className={style.App}>
        <Header todoCount={this.state.todoList.length}/>
        <ListBody onChange={this.handleCheck} isCheck={this.state.isCheck} onDelete={this.handleDelete} todoList={this.state.todoList}/>
        <Footer onToDoAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
