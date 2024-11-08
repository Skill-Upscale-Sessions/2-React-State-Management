const UseMemoHookComponent = ({
  isUseMemoShow,
}: {
  isUseMemoShow: boolean;
}) => {
  if (isUseMemoShow) {
    return <div>UseMemoHookComponent</div>;
  }
  return null;
};

export default UseMemoHookComponent;
