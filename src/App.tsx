// @deno-types="@types/react"
import { useState } from "react";
// @ts-expect-error Unable to infer type at the moment
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const env = Deno.env.get("env") as string;
  console.log(env);

  return (
    <>
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <button className="btn btn-secondary">
        <h1 className="">Hello world! I am Ironman</h1>
      </button>
      <div>
        <button className="btn">btn</button>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more XDD
      </p>
    </>
  );
}

export default App;
