import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactHooks from "./components/ReactHooks";

const App = () => {
  return (
    <Provider store={store}>
      <div className=" bg-gray-50 p-6 flex justify-center items-center">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Learn React
          </h1>
          <ReactHooks />
        </div>
      </div>
    </Provider>
  );
};

export default App;
