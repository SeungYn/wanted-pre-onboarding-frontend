import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import Todo from './Todo';

export default function Todos({ todos, onUpdate, deleteTodo }) {
  return (
    <ul>
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
