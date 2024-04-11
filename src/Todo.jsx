import React, { useState } from "react";
import './styles.css';
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  }

  const onClickAdd = () => {
    if (todoText === "") {
      alert("アイテムを入力してください");
      return;
    }
    const newTodos = [...todos, { text: todoText, isCompleted: false }];
    setTodos(newTodos);
    setTodoText("");
  }

  const changeIsCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const onClickDelete = (index) => {
    if (!window.confirm("本当に消去してもよろしいですか?")) return;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const onChangeEditTodoText = (event) => {
    setEditTodoText(event.target.value);
  }

  const onClickEdit = (index) => {
    setEditTodo(index);
    setEditTodoText(todos[index].text);
  }

  const onClickCompleteEdit = (index) => {
    if (editTodoText === "") {
      alert("アイテムを入力してください");
      return;
    }
    const newTodos = [...todos];
    newTodos[editTodo].text = editTodoText;
    setTodos(newTodos);
    setEditTodo(null);
    setEditTodoText("");
  };

  const getTotalTodos = () => {
    return todos.length;
  }

  const getCompletedCount = () => {
    return todos.filter(todo => todo.isCompleted).length;
  }

  const getIncompleteCount = () => {
    return todos.filter(todo => !todo.isCompleted).length;
  }

  return (
    <>
      <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd}/>
      <TodoList
        todos={todos} editTodo={editTodo} editTodoText={editTodoText}
        onChangeEditTodoText={onChangeEditTodoText} onClickCompleteEdit={onClickCompleteEdit} changeIsCompleted={changeIsCompleted}
        onClickEdit={onClickEdit} onClickDelete={onClickDelete}
        getTotalTodos={getTotalTodos} getCompletedCount={getCompletedCount} getIncompleteCount={getIncompleteCount}
      />
    </>
  );
}
