import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ToDoList from "./ToDoList";
import "./App.css";

const App = () => {
  const [listVal, setListVal] = useState("");
  const [list, setlist] = useState([]);

  const inputVal = (event) => {
    // console.log(event.target.value);
    setListVal(event.target.value);
  };

  const addVal = () => {
    setlist((prev) => {
      return [...prev, listVal];
    });
    setListVal("");
  };

  const deleteListItem = (id) => {
    console.log("It is deleted ", id);
    setlist((old) => {
      return old.filter((elem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo App</h1>
        <div className="fix">
          <input
            type="text"
            placeholder="Add an item"
            name="listVal"
            onChange={inputVal}
            value={listVal}
          />
          <Button onClick={addVal}>
            <AddCircleIcon />
          </Button>
        </div>

        <ul>
          {list.map((elem, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                list={elem}
                onSelect={deleteListItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
