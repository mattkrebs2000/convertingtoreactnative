import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View} from 'react-native';

const Header = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}> TodoList </Text>
      <Text style={styles.text2}> Home | About </Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    paddingTop: 20,
  height: "20%",
    width: "100%",
    justifyContent: "center",

    
    
  },
  text: {
      fontSize:50,
color: "white",
textAlign:"center",


  },
    text2: {
      fontSize:15,
color: "white",
textAlign:"center",


  }
});


