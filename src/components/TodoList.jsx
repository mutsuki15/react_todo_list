export const TodoList = (props) => {
  const {todos, editTodo, editTodoText, onChangeEditTodoText, 
        onClickCompleteEdit, changeIsCompleted, onClickEdit, 
        onClickDelete, getTotalTodos, getCompletedCount, 
        getIncompleteCount} = props;
  return (
    <div className="todo-area">
      <p className="title">ToDo List</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              <div className="list-row">
                {editTodo === index ? (
                  <>
                    <input className="edit-input" type="text" value={editTodoText} onChange={onChangeEditTodoText} />
                    <button onClick={() => onClickCompleteEdit(index)}>完了</button>
                  </>
                ) : (
                  <>
                    <input type="checkbox" checked={todo.isCompleted} onChange={() => changeIsCompleted(index)} /> 
                    <p className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>{todo.text}</p>
                    <button onClick={() => onClickEdit(index)}>編集</button>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <p className="title">全てのタスク：{getTotalTodos()} 完了済み：{getCompletedCount()} 未完了：{getIncompleteCount()}</p>
    </div>
  );
};
