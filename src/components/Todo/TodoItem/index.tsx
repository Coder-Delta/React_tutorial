import React from "react";
import "./style.css"

interface TodoItemProps {
  title?: string;//? is optional chaining
}//interface actually a type declaration process

const TodoItem: React.FC <TodoItemProps>= ({title}) => {
  return (
    <div>
      <li>{title}</li>
    </div>
  );
};

export default TodoItem;
