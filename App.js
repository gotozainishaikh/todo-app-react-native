import React from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/inputBar';

export default class App extends React.Component {
  
  constructor(){

    super();
    this.state = {

      todoInput: '',
      todosArray: [
        {id: 0,title: 'take out the trash',done: false},
        {id: 0,title: 'take out the trash',done: false},
        {id: 0,title: 'take out the trash',done: false},
        {id: 0,title: 'take out the trash',done: false}
      ]
    }

  }

  addNewTodo(){
    console.log(this.state.todoInput);
  }
  
  render(){
    const statusBar = (Platform.OS == 'ios') ? <View style={styles.statusBar}></View> : <View></View>;
  return (
    <View style={styles.container}>
      {statusBar}
      
      <Header title = "TodoApp"/>
      <InputBar 
        textChange={todoInput => this.setState({todoInput})} 
        addNewTodo={ () => this.addNewTodo() }
      />

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
