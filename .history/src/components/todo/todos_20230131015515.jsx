import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import Todo from './Todo';

export default function Todos({ todos, updateTodo }) {
  return (
    <ul>
      {todos.map((item) => (
        <Todo key={item.id + item.todo} item={item} />
      ))}
    </ul>
  );
}
