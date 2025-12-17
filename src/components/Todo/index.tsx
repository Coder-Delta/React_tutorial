import React from "react";
import TodoItem from "./TodoItem";
import "./style.css";

interface ITodoItem {
  id: number;
  title: string;
}

interface TodoProps {
  items: ITodoItem[];
}

const Todo: React.FC<TodoProps> = ({ items }) => {
  return (
    <div className="todo-container">
      <ol>
        {items.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
};

export default Todo;
