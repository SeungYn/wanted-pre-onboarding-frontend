import { useService } from '../../context/ServiceContext';
import useTodo from '../../hooks/todo/useTodo';
import Todo from './Todo';

export default function Todos({ todos }) {
  const { todoService } = useService();

  const {
    todos: test,
    createTodo,
    getTodos,
    updateTodo,
  } = useTodo(todoService);
  console.log(test);
  return (
    <ul>
      {todos.map((item) => (
        <Todo key={item.id + item.todo} item={item} />
      ))}
    </ul>
  );
}
