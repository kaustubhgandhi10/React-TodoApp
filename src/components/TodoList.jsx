import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  const sortTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortTodos.map((items) => (
        <TodoItem
          key={items.name}
          items={items}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
