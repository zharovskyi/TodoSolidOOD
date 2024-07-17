import React, { Component } from 'react';
import styles from './TaskEditor.module.css';
import PrioritySelector from '../PrioritySelector/PrioritySlector';
import PriorityOptions from '../../utils/Priority';

class TaskEditor extends Component {
  state = {
    text: '',
    priority: 'low',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTask({ ...this.state });
    this.setState({
      text: '',
      priority: 'low',
    });
  };

  render() {
    const { text, priority } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="text"
          value={text}
          onChange={this.handleChange}
          placeholder="Enter task content..."
        />
        <label className={styles.label}>
          Select task priority:
          <PrioritySelector
            value={priority}
            onChange={this.handleChange}
            options={Object.values(PriorityOptions)}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    );
  }
}

export default TaskEditor;
