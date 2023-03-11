/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.scss';
import { useAuthContext } from '../context/AuthContext';

const TodoItem = ({
  ItemProps, handleChange, delTodo, setUpdate,
}) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const { user } = useAuthContext();
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, ItemProps.id);
      setEditing(false);
    }
  };
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={ItemProps.completed}
          onChange={() => handleChange(ItemProps.id)}
        />
        <span style={ItemProps.completed ? completedStyle : null}>
          {ItemProps.title}
        </span>
        {/* eslint-disable-next-line */}
        {user && (
          <button onClick={handleEditing} type="button">
            <AiFillEdit
              style={{ color: '#5e5e5e', fontSize: '16px' }}
            />
          </button>
        )}
        {/* eslint-disable-next-line */}
        <button type="submit" onClick={() => delTodo(ItemProps.id)}><FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} /></button>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
        ref={editInputRef}
        defaultValue={ItemProps.title}
      />
    </li>
  );
};

export default TodoItem;
