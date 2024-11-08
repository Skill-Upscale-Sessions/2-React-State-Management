const UseContextHookComponent = ({
  isUseContextShow,
}: {
  isUseContextShow: boolean;
}) => {
  if (isUseContextShow) {
    return <div>UseContextHookComponent</div>;
  }
  return null;
};

export default UseContextHookComponent;
