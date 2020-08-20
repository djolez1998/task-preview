import React from "react";
import TaskList from "../../components/TaskList";

const Home = ({ taskList }) => {
  return (
    <div className='page'>
      <TaskList list={taskList} />
    </div>
  );
};

export default Home;
