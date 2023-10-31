import React, {useState} from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos,setTodo] = useState<Todo[]>([])

  const todoAddHandler = (text:string) => {
    setTodo(prevTodos =>[...prevTodos, {id:Math.random().toString(), text:text}])
  }
  const todoDeleteHandler = (todoId:string) =>{
    setTodo(prevTodos => prevTodos.filter((todo) => todo.id !==todoId ))
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items ={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  )

}

export default App;
