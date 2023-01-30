export default function Todos({ todos }) {
  return (
    <ul>
      {todos.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
