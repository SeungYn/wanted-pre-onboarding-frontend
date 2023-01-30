import useTodo from '../../hooks/useTodo';
import TodoInputBar from './TodoInputBar';
import Todos from './Todos';

export default function TodosContainer() {
  const { todos } = useTodo();
  return (
    <section>
      <TodoInputBar />
      <Todos todos={todos} />
    </section>
  );
}
