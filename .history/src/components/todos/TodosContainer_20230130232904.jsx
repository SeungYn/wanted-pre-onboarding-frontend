import useTodo from '../../hooks/useTodo';
import Todos from './Todos';

export default function TodosContainer() {
  const { todos } = useTodo();
  return (
    <section>
      <Todos todos={todos} />
    </section>
  );
}
