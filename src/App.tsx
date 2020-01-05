import * as React from "react";
import TodoList from "./components/TodoList";

interface Test {
  compiler: string;
  framework: string;
}

const App: React.FC<Test> = ({ compiler, framework }) => {
  return (
    <div>
      <TodoList />
      <p>Compiler : {compiler}</p>
      <p>Framework : {framework}</p>
    </div>
  );
};

export default App;
