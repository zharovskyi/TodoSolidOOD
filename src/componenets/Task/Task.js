import React from 'react';
import styles from './Task.module.css';
import PriorityOptions from '../../utils/Priority';
import PrioritySelector from '../PrioritySelector/PrioritySlector';

const Task = ({
  id,
  text,
  priority,
  completed,
  onDeleteTask,
  onUpdateComplited,
  onUpdatePriority,
}) => (
  <div
    className={`${styles.task} y
    ${styles[`${priority}Priority`]}`}
  >
    <p className={styles.text}>{text}</p>

    <hr />
    <div className={styles.actions}>
      <button type="button" onClick={onDeleteTask}>
        Delete
      </button>

      <PrioritySelector
        value={priority}
        options={Object.values(PriorityOptions)}
        onChange={e => onUpdatePriority(id, e.target.value)}
      />

      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={onUpdateComplited}
        />
      </label>
    </div>
  </div>
);

export default Task;
