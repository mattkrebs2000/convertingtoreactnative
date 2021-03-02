import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { CheckBox } from 'react-native-elements'

const TodoItem = (props) => {

  return (
    // <View style={props.todo.completed ? styles.style1 : styles.style2} >

    <View style={styles.other}>
    
<CheckBox style={styles.one}
          value={props.todo.completed}
          onValueChange={props.markComplete.bind(this, props.todo.id)}
        />
        <Text style={styles.two}>
        {props.todo.title}</Text>
        <Button
            style={styles.three}
          onPress={props.delTodo.bind(this, props.todo.id)}
          style={styles.btnStyle}
          id={props.todo.id}
          title="x"
        >
          x
        </Button>
     
    </View>
  );
};

export default TodoItem;


const styles = StyleSheet.create({
 
 btnStyle: {
   backgroundColor: "#ff0000",
  color: "#fff",
  borderWidth: 0,
  borderRadius: 50,
 
    },

    other: {
   
        
    },
style1: {

     backgroundColor: "#f4f4f4",
      padding: 10,
     
},
style2: {
  backgroundColor: "#f4f4f4",
      padding: 10,
    
     

},


});
