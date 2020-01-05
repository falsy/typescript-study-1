import * as React from "react";
import { useEffect, useState } from "react";

const TodoList: React.FC = () => {
  const [stateValue, setStateValue] = useState(0);

  useEffect(() => {
    console.log("hi");
  }, []);

  const handleClickStateValueUp = () => {
    setStateValue(stateValue + 1);
  };

  return (
    <>
      <p>{stateValue}</p>
      <button type="button" onClick={handleClickStateValueUp}>
        state value up
      </button>
    </>
  );
};

export default TodoList;
