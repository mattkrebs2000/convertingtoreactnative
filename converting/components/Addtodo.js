import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';

const Addtodo = ({ addTodo }) => {
 const [title, setTitle] = useState("");


  const onSubmit = (e) => {
    addTodo(title);
    setTitle("");
  };

    return (
          <View style={styles.container}>
      <TextInput
        placeholder="Todos"
        placeholderTextColor="black"
        style={styles.input}
        onChangeText={(title) => setTitle(title)}
        
      />
      <View style={styles.center}>
      <Text
        onPress={() => onSubmit() } 
        title="Filter!"
        color="white"
        style={styles.button}
      >Add
      </Text>
      </View>
      </View>
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

backgroundColor:"red",
  },
  center: {
    width: "30%",
backgroundColor: "white",
borderWidth: 3,
height:50,
flex: .3,
      justifyContent: "center"  
    }

});
