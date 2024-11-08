const UseRefHookComponent = ({ isUseRefShow }: { isUseRefShow: boolean }) => {
  if (isUseRefShow) {
    return <div>UseRefHookComponent</div>;
  }
  return null;
};

export default UseRefHookComponent;
