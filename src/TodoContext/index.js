import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider (props){
    const {
        item: todos,
        saveItem : saveTodos,
        loading,
        error,
      }= useLocalStorage("TODOS_V1", []);
      
    
     
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
      const [searchValue, setSearchValue] = React.useState("");
      let searchedString = [];
        
        if (!searchValue.length >= 1) {
        searchedString = todos;
      }
      else {
        searchedString = todos.filter(
          todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return (
              todoText.includes(searchText)
            )
          }
        )
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);

      };
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed : false,
          text,
        });
        saveTodos(newTodos);
      }
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const [openModal, setOpenModal] = React.useState(false);

    
    return (
    
    <TodoContext.Provider value = {
        {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    addTodo,
    deleteTodo,
    searchedString,
    loading,
    error,
    openModal,
    setOpenModal
        } }>
        {props.children}
    </TodoContext.Provider>);
    
}

export {TodoContext , TodoProvider};






