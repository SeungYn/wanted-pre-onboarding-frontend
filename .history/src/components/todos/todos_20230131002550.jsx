export default function Todos({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <li>
          <label>
            <input type='checkbox' />
            <span>{item.todo}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
