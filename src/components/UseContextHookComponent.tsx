import { useContext } from "react";
import { ThemeContext } from "../App";
import { Flex, Heading, Button } from "@radix-ui/themes";

const UseContextHookComponent = ({
  isUseContextShow,
}: {
  isUseContextShow: boolean;
}) => {
  const themeContext = useContext(ThemeContext);

  const isDarkTheme = themeContext.theme === "dark";

  if (isUseContextShow) {
    return (
      <Flex
        direction="column"
        gap="4"
        align="center"
        justify="center"
        className={`mt-4 p-4 ${isDarkTheme ? "bg-gray-800" : "bg-gray-100"}`}
      >
        <Heading size="6" className={isDarkTheme ? "text-white" : "text-black"}>
          useContext Hook
        </Heading>

        <Button
          className={`${
            isDarkTheme ? "bg-blue-700" : "bg-blue-500"
          } text-white`}
          onClick={() => themeContext.setTheme(isDarkTheme ? "light" : "dark")}
        >
          Toggle Theme
        </Button>
      </Flex>
    );
  }

  return null;
};

export default UseContextHookComponent;
