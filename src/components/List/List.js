import React, { Fragment } from "react";
import "./ListStyles.css";

let List = props => {
  const { list, deleteItem, toggleDone } = props;
  return (
    <Fragment>
      {list.map(item => (
        <div
          key={item.text}
          className={item.visibility ? "animal" : "animal-hidden"}
        >
          <input
            type="checkbox"
            checked={item.done ? "checked" : ""}
            onChange={() => toggleDone(item.id)}
            className="animal__done"
          />
          <span
            className="animal__text"
            style={{ textDecoration: item.done ? "line-through" : "none" }}
          >
            {item.text}
          </span>
          <span
            className="animal__delete"
            onClick={() => deleteItem(item.id)}
            title="delete"
          >
            &#10006;
          </span>
        </div>
      ))}
    </Fragment>
  );
};

export default List;
