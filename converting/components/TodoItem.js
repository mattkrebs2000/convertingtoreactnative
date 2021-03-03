import React, {useState} from 'react';
import { Switch, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


const TodoItem = (props) => {

  return (

    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
<Switch style={styles.checkbox}

          // value={props.todo.completed}
          value={props.todo.completed}
         
          onValueChange={props.markComplete.bind(this, props.todo.id)}
        />
 <Text style={styles.label}>
        {props.todo.title}</Text>
          <TouchableOpacity
       onPress={props.delTodo.bind(this, props.todo.id)}
        id={props.todo.id}
        style={{ backgroundColor: 'blue', flex: .2 }}>
        <Text style={{ fontSize: 20, color: '#fff' }}> X </Text>
        
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
 
    },
      container: {
    flex: 1,
    justifyContent: "center",
    width: 500,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
  
   flex:.2,
    color: "red",
   
    marginLeft: 0,
  },
  label: {
    margin: 8,
    flex: .3,
  }

});
