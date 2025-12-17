import React, { useState } from "react";
import Todo from "./components/Todo";
import Counter from "./components/Counter";


const MyTodosItem = [
  {
    title: "I need to finish my hw",
    id: 1,
  },
  {
    title: "I need to finish my hw",
    id: 2,
  },
];

const App: React.FC = () => {
  const [State, setState] = useState<boolean>(true)
  return (
    <div>
      <button onClick={(e) => setState(!State)}>Toggle</button>
      <Todo items={MyTodosItem} />
      {State?<Counter/>:""}
    </div>
  );
};

export default App;
