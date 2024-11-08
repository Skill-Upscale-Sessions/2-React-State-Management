const UseCallbackHookComponent = ({
  isUseCallbackShow,
}: {
  isUseCallbackShow: boolean;
}) => {
  if (isUseCallbackShow) {
    return <div>UseCallbackHookComponent</div>;
  }
  return null;
};

export default UseCallbackHookComponent;
