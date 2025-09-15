import React, { useEffect } from "react";

// Higher-Order Component: adds logging + injects theme
function withLogger(WrappedComponent) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log("[HOC Log] Wrapped component rendered with props", props);
    });

    // inject a theme prop if not passed
    const injectedProps = { theme: props.theme || "light" };

    return <WrappedComponent {...props} {...injectedProps} />;
  };
}

export default withLogger;


