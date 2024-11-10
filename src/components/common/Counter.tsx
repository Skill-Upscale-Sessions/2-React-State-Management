import React from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button, Flex, Heading } from "@radix-ui/themes";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { number } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Heading size="8" className="text-5xl font-bold mb-6">
        Counter
      </Heading>
      <div className="flex items-center space-x-6 mb-6">
        <Button
          variant="surface"
          color="crimson"
          size="4"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className="text-4xl font-bold">{number}</span>
        <Button
          variant="surface"
          color="green"
          size="4"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <Flex direction="row" gap="4" align="center" justify="center">
        <Button
          variant="surface"
          color="blue"
          size="3"
          onClick={() => dispatch(incrementByAmount(-5))}
        >
          Decrement by 5
        </Button>
        <Button
          variant="surface"
          color="blue"
          size="3"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment by 10
        </Button>
      </Flex>
    </div>
  );
};

export default Counter;
