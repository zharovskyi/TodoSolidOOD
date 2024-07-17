import React from 'react';
import Task from '../Task/Task';
import styles from './TaskList.module.css';

const TaskList = ({
  items,
  onDeleteTask,
  onUpdateComplited,
  onUpdatePriority,
}) =>
  items.length > 0 && (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id}>
          <Task
            {...item}
            onDeleteTask={() => onDeleteTask(item.id)}
            onUpdateComplited={() => onUpdateComplited(item.id)}
            onUpdatePriority={onUpdatePriority}
          />
        </li>
      ))}
    </ul>
  );

export default TaskList;
