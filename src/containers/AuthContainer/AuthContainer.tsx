import React, { useState } from "react";
import { Button } from "@mui/material";

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  return <div style={{ fontSize: 24 }}>{props.count}</div>;
};

export const AuthContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <Logo /> */}
      <h2>Auth Container</h2>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button
        onClick={() =>
          setCount(
            //@ts-ignore
            (count = 0)
          )
        }
      >
        0
      </Button>
      {/* TODO: Добавить кнопку сбрасывания */}
      <Counter count={count} />
      {/* <form action="">
        <input type="text" />
        <input type="text" />
      </form>
      <Button buttonText='Submit'></Button> */}
    </div>
  );
};
