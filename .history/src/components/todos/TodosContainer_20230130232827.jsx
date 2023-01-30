import Todos from './todos';

export default function TodosContainer() {
  return (
    <section>
      <Todos todos={todos} />
    </section>
  );
}
