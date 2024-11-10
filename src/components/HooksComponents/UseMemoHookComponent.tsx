import { Button, Flex } from "@radix-ui/themes";
import { useMemo, useState } from "react";

const anotherFunction = (number: number) => {
  console.log("Heavy function called");
  // This is a heavy function
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
};

const UseMemoHookComponent = ({
  isUseMemoShow,
}: {
  isUseMemoShow: boolean;
}) => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNumber = anotherFunction(number);
  // const doubleNumber = useMemo(() => anotherFunction(number), [number]);

  const doubleNumber = useMemo(() => {
    return anotherFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  if (isUseMemoShow) {
    return (
      <Flex
        direction="column"
        gap="4"
        align="center"
        justify="center"
        className={`mt-4 p-4 ${dark ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          className="p-2 rounded-md"
        />
        <Button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </Button>
        <div style={themeStyles}>{doubleNumber}</div>
      </Flex>
    );
  }
  return null;
};

export default UseMemoHookComponent;
