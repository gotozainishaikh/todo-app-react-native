import React from 'react';
import {Platform, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/inputBar';
import TodoItem from './components/TodoItem';

export default class App extends React.Component {
  
  constructor(){

    super();
    this.state = {

      todoInput: '',
      todosArray: [
        {id: 0,title: 'take out the trash',done: true},
        {id: 1,title: 'take out the trash',done: false},
        {id: 2,title: 'take out the trash',done: false},
        {id: 3,title: 'take out the trash',done: false}
      ]
    }

  }


  addNewTodo(){
    
    let todos = this.state.todosArray;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });
    this.setState({
      todos: todos,
      todoInput: ''
    });
  }

  toggleDone (item){

    let todos = this.state.todosArray;

    todos = todos.map((todo) => {
      if (todo.id == item.id){
        todo.done = !todo.done;
      }
      return todo;
    })
    this.setState({todos});
  }
  
  render(){
    const statusBar = (Platform.OS == 'ios') ? <View style={styles.statusBar}></View> : <View></View>;
  return (
    <View style={styles.container}>
      {statusBar}
      
      <Header title = "TodoApp"/>
      <InputBar 
        textChange={todoInput => this.setState({todoInput})} 
        todoInput={this.state.todoInput}
        addNewTodo={ () => this.addNewTodo() }
      />

      <FlatList 
        data={this.state.todosArray}
        extraData={this.state}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item,index}) => {
          return (
            <TodoItem 
            todoItem={item} 
            toggleDone={() => this.toggleDone(item)}
            />
          )
        }} />

    </View>
  );
}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },

  statusBar: {
    backgroundColor:'#FFCE00',
    height:20
  }
});
