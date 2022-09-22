import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: uniqid(),
        taskNum: 1,
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        taskNum: this.state.task.taskNum,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "", id: uniqid(), taskNum: this.state.task.taskNum + 1 },
    });
    console.log(this.state.tasks);
  };

  removeTask(id) {
    let newArr = this.state.tasks.filter(function (curr) {
      if (!curr.id === id) {
        return true;
      }
    });

    // this.setState({
    //   tasks: newArr,
    //   task: this.state.task,
    // });

    console.log(newArr);
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input
            value={task.text}
            type="text"
            onChange={this.handleChange}
            id="taskInput"
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview removeFunc={this.removeTask} tasks={tasks} />
      </div>
    );
  }
}

export default App;
