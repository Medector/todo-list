import React from "react";
import "./TodoItem.css"


function TodoItem(props){
    React.useEffect(() => console.log(props.completed), [])
    return(
        
        <li className="TodoItem">
        <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
        >
            x
        </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>        
         {props.text} 
         </p>
       <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
       >
           x
       </span>
       </li>
    );
}

export {TodoItem};