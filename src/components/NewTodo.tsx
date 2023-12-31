import React, { useRef } from "react";
import "./NewTodo.css"
interface NewTodoProps {
    onAddTodo: (todoText:string) => void;
}
const NewTodo: React.FC<NewTodoProps> =props=> {
    const textInputRef = useRef<HTMLInputElement>(null)
    const todoSubmitHandler = (event: React.FormEvent)=> {
        event.preventDefault()
        const enteredText = textInputRef.current!.value
        textInputRef.current!.value =""
        props.onAddTodo(enteredText)
    }
    return <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo text</label>
            <input type="text" id="todo-list" ref={textInputRef}/>

        </div>
        <button type="submit" >ADD TODO</button>
    </form>
}


export default NewTodo