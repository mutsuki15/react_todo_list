import React from "react";
import './styles.css';
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import { useTodos } from "./hooks/useTodos";

export const Todo = () => {
  const {
    todoText,
    todos,
    editTodo,
    editTodoText,
    onChangeTodoText,
    onClickAdd,
    changeIsCompleted,
    onClickDelete,
    onChangeEditTodoText,
    onClickEdit,
    onClickCompleteEdit,
  } = useTodos();

  const totalTodos = todos.length;
  const completedCount = todos.filter(todo => todo.isCompleted).length;
  const incompleteCount = totalTodos - completedCount;

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChangeTodoText={onChangeTodoText} 
        onClickAdd={onClickAdd}
      />
      <TodoList
        todos={todos} 
        editTodo={editTodo} 
        editTodoText={editTodoText}
        onChangeEditTodoText={onChangeEditTodoText} 
        onClickCompleteEdit={onClickCompleteEdit}
        changeIsCompleted={changeIsCompleted}
        onClickEdit={onClickEdit} 
        onClickDelete={onClickDelete}
        totalTodos={totalTodos} 
        completedCount={completedCount} 
        incompleteCount={incompleteCount}
      />
    </>
  );
}
