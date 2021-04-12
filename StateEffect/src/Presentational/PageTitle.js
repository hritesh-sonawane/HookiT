import React, { useState, useEffect } from "react";

export default function PageTitle() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name}`;
  });

  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input
        onChange={({ target }) => setName(target.value)}
        value={name}
        type="text"
      />
    </div>
  );
}
