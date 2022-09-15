
import { AppUI } from './AppUI';
import './App.css';
import React from "react";
import { TodoProvider } from '../TodoContext';

import { useLocalStorage } from '../TodoContext/useLocalStorage';
import { TodoContext } from '../TodoContext';

// const DefaultTodos =[
// {text: "Dar de comer al perro", completed: false},
// {text: "Poner a cocer los frijoles", completed: true},
// {text: "Sacar a Pasear al Perro", completed: false},
// {text: "lalalal", completed: false},
// {text: "lavar la ropa", completed:true}
// ]



function App() {
 
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  );
  }
export default App;