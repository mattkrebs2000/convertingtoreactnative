import React from "react";
import TodoItem from "./TodoItem";
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

const Todos = ({ todos, markComplete, delTodo }) => {
  return todos.map((todo) => (

<TouchableOpacity>

    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={markComplete}
      delTodo={delTodo}
    />
    </TouchableOpacity>
  ));
};

export default Todos;
