import useTodo from '../../hooks/useTodo';
import TodoInputBar from './TodoInputBar';
import Todos from './Todos';

export default function TodosContainer() {
  const { todos, createTodo } = useTodo();
  return (
    <section>
      <TodoInputBar handleCreateTodo={createTodo} />
      <Todos todos={todos} />
    </section>
  );
}
