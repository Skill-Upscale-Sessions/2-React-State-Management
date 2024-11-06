import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">React Demo</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Counter />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
