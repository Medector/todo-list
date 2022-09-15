import React, { useContext } from "react";
import {TodoContext} from "../TodoContext";
import "./TodoForm.css"
    function TodoForm(){
        const [newTodoValue, setNewTodoValue] = React.useState("");
        const {addTodo,} = React.useContext(TodoContext);
        const onCancel = () =>{
            setOpenModal(false);
       };

        const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
        };

    const onChange = (event) =>{
       setNewTodoValue(event.target.value);
    }
    const {
        saveTodo,
        setOpenModal
    } = React.useContext (TodoContext);
        return (
        <form onSubmit= {onSubmit}>
            <label>Create a new ToDo</label>
            <textarea 
            value={newTodoValue}
            onChange={onChange}
            placeholder="New ToDo"/>

            <div>
                <button 
                type="button"
                onClick = {onCancel}
                className="TodoForm-button TodoForm-button--cancel" >
                    Close
                </button>

                <button 
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>

            </div>
        </form>)
    }

    export {TodoForm};