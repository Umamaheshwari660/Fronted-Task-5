import React, { useState, useRef, useEffect } from "react";

function HookDemo() {
  const [value, setValue] = useState("Hello");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("[Hook Demo] Mounted");
  }, []);

  return (
    <div className="hook-demo-card">
      <h3>Hook Demo</h3>
      <p>
        Value: <strong>{value}</strong>
      </p>
      <input
        ref={inputRef}
        value={value}
        placeholder="Type to update value"
        onChange={(e) => setValue(e.target.value)}
        style={{
          padding: "6px 8px",
          borderRadius: 6,
          border: "1px solid #333",
        }}
      />
    </div>
  );
}

export default HookDemo;




