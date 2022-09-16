import React from "react";
import "./TodoItem.css";
import CheckIcon from "@mui/icons-material/Check";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
function TodoItem(props) {
  React.useEffect(() => console.log(props.completed), []);
  return (
    <li className="TodoItem" id="TodoItemBox">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <CheckIcon id="checkIcon" />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <DeleteForeverIcon id="deleteIcon" />
      </span>
    </li>
  );
}

export { TodoItem };
