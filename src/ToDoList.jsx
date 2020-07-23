import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";

const ToDoList = (props) => {
  return (
    <div className="listStyling">
      <CancelIcon
        onClick={() => {
          props.onSelect(props.id);
        }}
      />
      <li>{props.list}</li>
    </div>
  );
};

export default ToDoList;
