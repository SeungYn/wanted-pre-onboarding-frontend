import useTodo from '../../hooks/useTodo';
import Todos from './todos';

export default function TodosContainer() {
  const { todos } = useTodo();
  return (
    <section>
      <Todos todos={todos} />
    </section>
  );
}
