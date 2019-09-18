import React, { Component } from 'react';

class TodoItems extends Component {

  render() {      
      const items = this.props.itemArr.map((data, i) => (
        <div className="todo-list" key={i}>
        {
            i !== 0 ?
            <button onClick={this.props.up.bind(this, i)}>&#8607;</button>
            :
            <noscript />            
        }
        {
            i !== this.props.itemArr.length - 1 ?
            <button onClick={this.props.down.bind(this, i)}>&#8609;</button>
            :
            <noscript />
        }
               {i + 1}. {data}
            <button onClick={this.props.handler.bind(this,i)}>remove</button>
        </div>
      ))

    return (
      <div className="todo-items">
          <h4>
              To-Do ({this.props.itemArr.length}):
          </h4>
          {items}
      </div>
    );
  }
}

export default TodoItems;