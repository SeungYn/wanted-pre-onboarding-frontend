import Todo from '../todo/Todo';
import styles from './Todos.module.css';

export default function Todos({ todos, onUpdate, deleteTodo }) {
  return (
    <ul className={styles.todos}>
      {todos.map((item) => (
        <Todo
          key={item.id + item.todo}
          item={item}
          onUpdate={onUpdate}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
