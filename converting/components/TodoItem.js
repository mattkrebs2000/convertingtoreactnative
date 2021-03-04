import React, {useState} from 'react';
import { Switch, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const TodoItem = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
<Switch style={styles.checkbox}
          value={props.todo.completed}
          onValueChange={props.markComplete.bind(this, props.todo.id)}
        />
 <Text style={ props.todo.completed ?styles.label : styles.label2 }>
        {props.todo.title}</Text>
          <TouchableOpacity
       onPress={props.delTodo.bind(this, props.todo.id)}
        id={props.todo.id}
        style={{ backgroundColor: 'red', flex: .09, alignItems: "center",justifyContent: "center", borderRadius: 100 / 2, }}>
        <Text style={{ fontSize: 15, color: '#fff', }}> X </Text>
        
      </TouchableOpacity>
   </View>
    </View>
  );
  }
export default TodoItem;


const styles = StyleSheet.create({
 
 btnStyle: {
   backgroundColor: "#ff0000",
  color: "#fff",
  borderWidth: 0,
  borderRadius: 50,
  alignItems:"center",
 
    },
      container: {
    flex: 1,
    justifyContent: "center",
    width: "98%",
    marginLeft:5,
   
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
  
   flex:.13,
    color: "red",
    marginLeft: 0,
  },
  label: {
    margin: 8,
    flex: .75,
    textDecorationLine: "line-through",
  },
   label2: {
    margin: 8,
    flex: .75,
    textDecorationLine: "none",
  },


});
