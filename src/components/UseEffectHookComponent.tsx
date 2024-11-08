import React from "react";

const UseEffectHookComponent = ({
  isUseEffectShow,
}: {
  isUseEffectShow: boolean;
}) => {
  if (isUseEffectShow) {
    return <div>UseEffectHookComponent</div>;
  }
};

export default UseEffectHookComponent;
