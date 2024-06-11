import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((items) => (
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
