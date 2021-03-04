import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';

const Addtodo = ({ addTodo }) => {
 const [title, setTitle] = useState("");


  const onSubmit = (e) => {
    addTodo(title);
    setTitle("");
  };

    return (
          <TouchableOpacity style={styles.container}>
      <TextInput
        placeholder="Todos"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={(title) => setTitle(title)}
        value={title}
      />
      <TouchableOpacity style={styles.center} onPress={() => onSubmit()}>
      <Text
      title="Add"
        style={styles.button}
      ></Text>
     
      </TouchableOpacity>
      </TouchableOpacity>
    );

}
export default Addtodo;


const styles = StyleSheet.create({
    input: {
    marginHorizontal: 0,
   borderWidth: 3,
    fontSize: 28,
    paddingStart: 8,
    backgroundColor: "white",
    flex: .7,
    height:50,
   
    
  },
  container: {
    flexDirection: "row",
    flex:1,
    paddingBottom: 20, 
  },
  button: {
textAlign: "center",
color: "black",
  },
  center: {
    width: "30%",
backgroundColor: "red",
borderWidth: 3,
height:50,
flex: .3,
justifyContent: "center"  
    }

});
