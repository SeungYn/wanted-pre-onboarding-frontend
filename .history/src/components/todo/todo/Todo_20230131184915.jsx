import useTodoModifyMode from '../../../hooks/todo/useTodoModifyMode';
import EditTodoForm from '../../editTodoForm/EditTodoForm';
import styles from './Todo.module.css';

export default function Todo({ item, onUpdate, deleteTodo }) {
  const { isModifyMode, toggleModifyMode } = useTodoModifyMode();
  const { id, todo, isCompleted } = item;

  return (
    <li className={styles.todo}>
      <label htmlFor={`check${id}`} className={styles.label}>
        <input
          type='checkbox'
          id={`check${id}`}
          onChange={() => onUpdate({ id, todo, isCompleted: !isCompleted })}
          checked={isCompleted}
        />
        {!isModifyMode && <span className={styles.text}>{todo}</span>}
      </label>
      {!isModifyMode && (
        <>
          <button onClick={toggleModifyMode} data-testid='modify-button'>
            수정
          </button>
          <button onClick={() => deleteTodo(id)} data-testid='delete-button'>
            삭제
          </button>
        </>
      )}
      {isModifyMode && (
        <EditTodoForm
          item={item}
          onUpdate={onUpdate}
          onClose={toggleModifyMode}
        />
      )}
    </li>
  );
}
