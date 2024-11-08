import { Flex, Heading, TextField } from "@radix-ui/themes";
import { useState, useRef, useEffect } from "react";

const UseRefHookComponent = ({ isUseRefShow }: { isUseRefShow: boolean }) => {
  const [name, setName] = useState("");
  // const renderCount = useRef(1);
  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // });

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  if (isUseRefShow) {
    return (
      <Flex
        direction="column"
        gap="4"
        align="center"
        justify="center"
        className="p-4 space-x-4 bg-blue-100"
      >
        <Heading size="6">useRef Hook</Heading>

        {/* <TextField.Root
          size="1"
          placeholder="Enter your text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Heading size="5">You typed: {name}</Heading>
        <Heading size="7">Render Count: {renderCount.current}</Heading> */}

        <TextField.Root
          size="1"
          placeholder="Enter your text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Heading size="5">You typed: {name}</Heading>
        <Heading size="5">Previous Value: {prevName.current}</Heading>
      </Flex>
    );
  }
  return null;
};

export default UseRefHookComponent;
