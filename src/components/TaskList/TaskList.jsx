import React from "react";
import Item from "../Item";

const TaskList = ({ list }) => {
  return (
    <div>
      {list.map((task) => (
        <Item key={task.title} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
