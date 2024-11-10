import React from "react";

const withDelete = (Component) => {
  const canDelete = false;
  return function (props) {
    if (canDelete) {
      return <Component {...props} canDelete={canDelete} />;
    } else {
      return <Component {...props} />;
    }
  };
};

export default withDelete;
