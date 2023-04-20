import React, { useEffect, useState, useTransition } from "react";

function UseTransition() {
  const [isPending, startTransition] = useTransition({ timeoutMs: 2000 });
  const [name, setName] = useState();
  const [list, setList] = useState();

  const handleNameChange = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) =>
        startTransition(() => {
          setName(json);
        })
      );
  };

  const handleName = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/10")
      .then((response) => response.json())
      .then((json) => setList(json));
  };

  // console.log("isPending", name);

  console.log("isPending", isPending);
  return (
    <div>
      <h1>{isPending ? "Loading..." : name?.body}</h1>
      <button onClick={handleNameChange}>name Change with Transition</button>
      <h1>{isPending ? "Loading..." : list?.body}</h1>
      <button onClick={handleName}>name Change without Transition</button>
    </div>
  );
}

export default UseTransition;
