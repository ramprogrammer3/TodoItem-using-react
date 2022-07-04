import React, { Component } from 'react'

export default class App extends Component {
  state= {
    itemName  : " ",
    todoItem : []
  }
  inputChanged = (e) =>{
    this.setState({itemName : e.target.value})
     
  }
  addItem = () =>{
    let todoItemCopy = [...this.state.todoItem]
    todoItemCopy.push(this.state.itemName)
    this.setState({todoItem: todoItemCopy, itemName : ""})
  }

  deleteItem = (index) =>{
    let todoItemCopy = [...this.state.todoItem]
    todoItemCopy.splice(index,1)
    this.setState({todoItem : todoItemCopy})
  }

  updateItem = (e,i) =>{
    let todoItemCopy = [...this.state.todoItem]
    todoItemCopy.splice(i,1,e.target.value)
    this.setState({todoItem : todoItemCopy})
  }
  render() {
    return (
      <div>
        <h1>Todo List </h1>
        <input type="text" placeholder='Enter your name '
        onChange={this.inputChanged} value = {this.state.itemName} />
       
        <button onClick={this.addItem}>Add item </button>
        <br /><br />

        {JSON.stringify(this.state)}
        <br /><br />
        <ol>
          {this.state.todoItem.map((item,i)=>{
            return <div key={i}>
            <span> {item} </span> 
            <input type="text" placeholder='type to update the item name '
            onChange={(e) => {this.updateItem(e,i)}}
            
             />
            <button onClick={() => {this.deleteItem(i)}}>delete item</button>
            </div>
          })}
        </ol>
      </div>
    )
  }
}
