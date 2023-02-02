import Todo from './todo/Todo';

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
