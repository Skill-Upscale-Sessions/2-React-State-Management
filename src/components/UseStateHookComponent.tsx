import { useState } from "react";
import { Button, Flex, Heading } from "@radix-ui/themes";

const UseStateHookComponent = ({
  isUseStateShow,
}: {
  isUseStateShow: boolean;
}) => {
  const [number, setNumber] = useState<number>(0);

  const handleIncrement = () => {
    setNumber(number + 1);
    // setNumber((prevNumber) => prevNumber + 1);
  };

  const handleDecrement = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  // ========================================================================================================================

  // const [data, setData] = useState({
  //   color: "red",
  //   count: 0,
  // });

  // const handleColorChange = () => {
  //   setData({ ...data, color: "blue" });
  // };

  // const handleCountIncrement = () => {
  //   setData((prevData) => {
  //     return { ...prevData, count: prevData.count + 1 };
  //   });

  //   // setData((prevData) => {
  //   //   return { color: prevData.color, count: prevData.count + 1 };
  //   // });

  //   // setData({ ...data, count: data.count + 3 }); // Updates count to data.count + 3
  //   // setData({ ...data, count: data.count + 1 }); // Immediately after, updates count to data.count + 1
  // };

  if (isUseStateShow) {
    return (
      <Flex
        direction="column"
        gap="4"
        align="center"
        justify="center"
        className="p-4 space-x-4 bg-violet-100"
      >
        <Heading size="6">useState Hook</Heading>
        <div className="text-lg font-semibold">Number: {number}</div>

        <Flex gap="4">
          <Button onClick={handleIncrement} variant="surface" color="green">
            Increment
          </Button>
          <Button onClick={handleDecrement} variant="surface" color="red">
            Decrement
          </Button>
        </Flex>

        {/*  ======================================================================================================================== */}

        {/* <div className="text-lg font-semibold">Color: {data.color}</div>
        <div className="text-lg font-semibold">Count: {data.count}</div>
        <Button onClick={handleColorChange} variant="surface" color="blue">
          Change Color
        </Button>
        <Button
          // onClick={() => setData({ ...data, count: data.count + 1 })}
          onClick={handleCountIncrement}
          variant="surface"
          color="blue"
        >
          Increment Count
        </Button> */}
      </Flex>
    );
  }

  return null;
};

export default UseStateHookComponent;
