// src/components/FilterButtons.js
import React from "react";
import useTasks from "../hooks/useTasks";

const FilterButtons = () => {
  const { filter, filterBy } = useTasks();

  return (
    <div className="filter-buttons">
      <button
        className={filter === "All" ? "active" : ""}
        onClick={() => filterBy("All")}
      >
        All
      </button>
      <button
        className={filter === "Completed" ? "active" : ""}
        onClick={() => filterBy("Completed")}
      >
        Completed
      </button>
      <button
        className={filter === "Pending" ? "active" : ""}
        onClick={() => filterBy("Pending")}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterButtons;
