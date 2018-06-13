import React from "react";
import "./FilterStyles.css";

let Filter = props => {
  const { filterAll, filterFeeded, filterHungry } = props;
  return (
    <div className="filter">
      <button className="filter__btn" onClick={filterAll}>
        all
      </button>
      <button className="filter__btn" onClick={filterFeeded}>
        feeded
      </button>
      <button className="filter__btn" onClick={filterHungry}>
        hungry
      </button>
    </div>
  );
};

export default Filter;
