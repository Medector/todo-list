import React from "react";
import "./CreateTodoButton.css";
import AddIcon from "@mui/icons-material/Add";
function CreateTodoButton(props) {
  const onClickTodoButton = () => {
    props.setOpenModal((prevState) => !prevState);
    // props.setOpenModal.toggle(false)
  };

  return (
    <button className="CreateTodoButton" onClick={onClickTodoButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
