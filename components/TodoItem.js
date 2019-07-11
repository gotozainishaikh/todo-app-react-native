import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class TodoItem extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        const todoItem = this.props.todoItem;

        return (
            <TouchableOpacity style={styles.todoItem} onPress={this.props.toggleDone}> 
                <Text style={(todoItem.done) ? {color:'#AAAAAA'} : {color:'#313131'}}>
                    {todoItem.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15

    }
})