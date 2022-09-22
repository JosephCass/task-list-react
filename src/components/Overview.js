import React from "react";

const Overview = (props) => {
  const { tasks, removeFunc } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.taskNum} {task.text}
            <button onClick={removeFunc}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
