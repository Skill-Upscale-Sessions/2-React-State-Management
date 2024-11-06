import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Flex, Button, Badge } from "@radix-ui/themes";

const App = () => {
  return (
    <Provider store={store}>
      <main className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
        <section className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Learn React
          </h1>
          <div className="space-y-6">
            <Flex direction="column" gap="4">
              <Badge color="ruby" className="text-lg mb-2">
                Must Know Hooks
              </Badge>
              <div className="space-x-3">
                <Button variant="surface">useState</Button>
                <Button variant="surface">useEffect</Button>
                <Button variant="surface">useContext</Button>
              </div>
            </Flex>
            <Flex direction="column" gap="4">
              <Badge color="violet" className="text-lg mb-2">
                Lesser Used Hooks
              </Badge>
              <div className="space-x-3">
                <Button variant="surface">useReducer</Button>
                <Button variant="surface">useMemo</Button>
                <Button variant="surface">useCallback</Button>
                <Button variant="surface">useRef</Button>
              </div>
            </Flex>
          </div>
        </section>
      </main>
    </Provider>
  );
};

export default App;
