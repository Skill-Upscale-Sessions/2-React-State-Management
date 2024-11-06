import React, { useState, useCallback, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addTodo, toggleTodo, removeTodo } from "../store/slices/todoSlice";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const todos = useAppSelector(
    (state: { todos: { items: Todo[] } }) => state.todos.items
  );
  const dispatch = useAppDispatch();

  const handleAddTodo = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (newTodo.trim()) {
        dispatch(addTodo(newTodo.trim()));
        setNewTodo("");
      }
    },
    [dispatch, newTodo]
  );

  const completedCount = useMemo(() => {
    return todos.filter((todo: Todo) => todo.completed).length;
  }, [todos]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <form onSubmit={handleAddTodo} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="flex-1 border p-2 rounded"
            placeholder="Add new todo"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
      <div className="mb-4">
        <p>
          Completed: {completedCount} / {todos.length}
        </p>
      </div>
      <ul className="space-y-2">
        {todos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
                className="h-4 w-4"
              />
              <span
                className={todo.completed ? "line-through text-gray-500" : ""}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
