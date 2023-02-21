import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */
const TodosList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {
    todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        ItemProps={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))
    }
  </ul>
);

export default TodosList;
