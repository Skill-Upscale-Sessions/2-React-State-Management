import React from "react";

const UseStateHookComponent = ({
  isUseStateShow,
}: {
  isUseStateShow: boolean;
}) => {
  if (isUseStateShow) {
    return <div>UseStateHookComponent</div>;
  }
};

export default UseStateHookComponent;
