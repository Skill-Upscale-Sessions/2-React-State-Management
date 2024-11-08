/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Button } from "@radix-ui/themes";
import { useState, useCallback } from "react";
import ShowItems from "./ShowItems";

const UseCallbackHookComponent = ({
  isUseCallbackShow,
}: {
  isUseCallbackShow: boolean;
}) => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const fetchData = useCallback(
  //   (number: number) => {
  //     console.log("Fetching Data...");
  //     return [number, number + 1, number + 2];
  //   },
  //   [number]
  // );

  const fetchData = (number: number) => {
    console.log("Fetching Data...");
    return [number, number + 1, number + 2];
  };

  if (isUseCallbackShow) {
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
        <Button onClick={() => setDark(!dark)}>Change Theme</Button>
        <ShowItems fetchData={fetchData} number={number} />
      </Flex>
    );
  }
  return null;
};

export default UseCallbackHookComponent;
