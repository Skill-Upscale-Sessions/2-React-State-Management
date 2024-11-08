import { Button, Flex, Heading } from "@radix-ui/themes";
import React, { useEffect, useState } from "react";

const UseEffectHookComponent = ({
  isUseEffectShow,
}: {
  isUseEffectShow: boolean;
}) => {
  const [number, setNumber] = useState(0);
  const [square, setSquare] = useState(0);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    console.log("useEffect works");
    setSquare(number * number);

    return () => {
      console.log("Clean up function");
    };
  }, [number]);

  if (isUseEffectShow) {
    return (
      <Flex
        direction="column"
        gap="4"
        align="center"
        justify="center"
        className="p-4 space-x-4 bg-blue-100"
      >
        <Heading size="6">useEffect Hook</Heading>

        {/* <div className="text-lg font-semibold">Window Width: {windowWidth}</div> */}

        <div className="text-lg font-semibold">Number: {number}</div>
        <Button
          onClick={() => setNumber(number + 1)}
          variant="surface"
          color="green"
        >
          Increment
        </Button>
        <Button
          onClick={() => setNumber(number - 1)}
          variant="surface"
          color="red"
        >
          Decrement
        </Button>

        <div className="text-lg font-semibold">Square: {square}</div>
      </Flex>
    );
  }

  return null;
};

export default UseEffectHookComponent;
