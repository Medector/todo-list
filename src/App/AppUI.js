import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import  {Modal} from "../Modal";
import {TodoForm} from "../TodoForm"


function AppUI(){
    const {error,
        loading,
        searchedString,
        deleteTodo,
        completeTodo,   
        openModal,
        setOpenModal,
    
    } = React.useContext(TodoContext);
    return (
        
        <React.Fragment>
        <TodoCounter/>    
        <TodoSearch/>
    <TodoList>
    {loading && <p>Loading ... ⏰</p>}
    {error && <p>Critical error</p>}
    {!loading && (!searchedString.lenght) && <p>Create your first ToDo </p>}

    {searchedString.map(todo => 
    (
    <TodoItem 
    key={todo.text} 
    text={todo.text}
    completed={todo.completed}
    onComplete = {() => completeTodo(todo.text)}
    onDelete = {() => deleteTodo(todo.text)
    }/> ))
    }   
  </TodoList>

    {openModal && (
        <Modal>
        <TodoForm/>
        </Modal>
    )}
      
    <CreateTodoButton
        setOpenModal={setOpenModal}
    />
    
</React.Fragment>    
      );  
}
export {AppUI};