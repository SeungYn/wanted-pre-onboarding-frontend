import useTodoModifyMode from '../../../hooks/todo/useTodoModifyMode';
import EditTodoForm from '../EditTodoForm';
import styles from './Todo.module.css';

export default function Todo({ item, onUpdate, deleteTodo }) {
  const { isModifyMode, toggleModifyMode } = useTodoModifyMode();
  const { id, todo, isCompleted } = item;

  return (
    <li className={styles.todo}>
      <label htmlFor={`check${id}`}>
        <input
          type='checkbox'
          id={`check${id}`}
          onChange={() => onUpdate({ id, todo, isCompleted: !isCompleted })}
          checked={isCompleted}
        />
        {!isModifyMode && <span>{todo}</span>}
      </label>
      {!isModifyMode && (
        <div>
          <button onClick={toggleModifyMode} data-testid='modify-button'>
            수정
          </button>
          <button onClick={() => deleteTodo(id)} data-testid='delete-button'>
            삭제
          </button>
        </div>
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
