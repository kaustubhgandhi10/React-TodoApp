import styles from "./todoitem.module.css";

export default function TodoItem({ items, todos, setTodos }) {
  function handleDelete(items) {
    console.log("delete button clicked for item", items);
    setTodos(todos.filter((todo) => todo !== items));
  }
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  const strikeThrough = items.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={strikeThrough} onClick={() => handleClick(items.name)}>
          {items.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(items)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
