const UseReducerHookComponent = ({
  isUseReducerShow,
}: {
  isUseReducerShow: boolean;
}) => {
  if (isUseReducerShow) {
    return <div>UseReducerHookComponent</div>;
  }
  return null;
};

export default UseReducerHookComponent;
