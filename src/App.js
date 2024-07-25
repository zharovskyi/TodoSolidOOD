import React, { Component } from 'react';
import './App.css';
import TaskEditor from './componenets/TaskEditor/TaskEditor';
import TaskFilter from './componenets/TaskFilter/TaskFilter';
import TaskList from './componenets/TaskList/TaskList';

const containerStyles = {
  maxWidth: 1200,
  minWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
};

const filterTasks = (tasks, filter) => {
  return tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase()),
  );
};
class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };
  
  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  addTask = task => {
    const taskToAdd = {
      ...task,
      id: new Date().getTime(), //uniqe id
      completed: false,
    };
    this.setState(prevState => ({
      tasks: [...prevState.tasks, taskToAdd],
    }));
  };

  deleteTask = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== id),
    }));
  };

  updateComplited = id => {
    this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    }));
  };

  updatePriority = (id, priority) => {
    this.setState(state => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, priority } : task,
      ),
    }));
  };

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = filterTasks(tasks, filter);

    return (
      <div style={containerStyles}>
        <TaskEditor onAddTask={this.addTask} />
        <hr />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateComplited={this.updateComplited}
          onUpdatePriority={this.updatePriority}
        />
      </div>
    );
  }
}

export default App;
