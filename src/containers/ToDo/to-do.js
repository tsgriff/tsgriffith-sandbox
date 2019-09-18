import React, { Component } from 'react';
import TodoItems from "../../components/ToDo/todo-items";

class ToDo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: '',
      itemArr: []
    }
    this.handleItem = this.handleItem.bind(this)     
    this.addItem = this.addItem.bind(this) 
    this.removeItem = this.removeItem.bind(this) 
    this.moveUp = this.moveUp.bind(this) 
    this.moveDown = this.moveDown.bind(this) 
    
  }

  removeItem(i) {
    this.setState({itemArr: [...this.state.itemArr.slice(0, i), ...this.state.itemArr.slice(i+1)]})
  }

  handleItem(event) {
    event.preventDefault()
    this.setState({
      item: event.target.value
    })
  }

  addItem(event) {
    event.preventDefault()
    let callback = () => {
      // Clear input value on click //
      document.querySelector('.item-to-add').value = ""
    }
    let newArr = this.state.itemArr.slice()
    newArr.push(this.state.item)
    this.setState({
      itemArr: newArr
    }, callback)
  }

  moveUp(i) {
   
   let removed = this.state.itemArr[i].slice()
   let newArr = [...this.state.itemArr.slice(0, i), ...this.state.itemArr.slice(i+1)]
   newArr.splice(i-1, 0, removed)
   this.setState({
     itemArr: newArr
   })

  }

  moveDown(i) {
    let removed = this.state.itemArr[i].slice()
    let newArr = [...this.state.itemArr.slice(0, i), ...this.state.itemArr.slice(i+1)]
    newArr.splice(i+1, 0, removed) 
    this.setState({
      itemArr: newArr
    })
  }

  render() {
    return (
      <div className="App">
          <h1 className="App-title">To Do List - React Only</h1>
        <p className="App-intro">
          <input className="item-to-add" onChange={this.handleItem} placeholder="enter item"></input>
          <button onClick={this.addItem}>Add</button>
        </p>
        {
          this.state.itemArr.length === 0 ?
          <h4>No items</h4>
          :
        <TodoItems {...this.state} 
        handler={this.removeItem} 
        up={this.moveUp}
        down={this.moveDown}
        />
        }
      </div>
    );
  }
}

export default ToDo;
