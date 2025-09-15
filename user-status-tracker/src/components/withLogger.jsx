import React, { useEffect } from "react";

// Higher-Order Component: logs props + injects theme if missing
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log("[HOC Log] Wrapped component rendered with props", props);
    });

    const injectedProps = { theme: props.theme || "light" };
    return <WrappedComponent {...props} {...injectedProps} />;
  };
}

export default withLogger;



 