import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { Flex, Button } from "@radix-ui/themes";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">React Demo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <Counter />
          <TodoList /> */}
          <Flex align="center" gap="3">
            <Button variant="classic">Edit profile</Button>
            <Button variant="solid">Edit profile</Button>
            <Button variant="soft">Edit profile</Button>
            <Button variant="surface">Edit profile</Button>
            <Button variant="outline">Edit profile</Button>
          </Flex>
        </div>
      </div>
    </Provider>
  );
};

export default App;
