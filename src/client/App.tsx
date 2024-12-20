// @deno-types="@types/react"
import { useState } from "react";
// @ts-expect-error Unable to infer type at the moment
import reactLogo from "./assets/react.svg";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);
  return (
    <QueryClientProvider client={queryClient}>
      <img src="/vite-deno.svg" alt="Vite with Deno" width="248" height="275" />
      <button className="btn btn-secondary">
        <h1 className="">Hello world! I am Ironman</h1>
      </button>
      <div>
        <button className="btn">btn</button>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" alt="Vite logo" width="32" height="32" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} alt="React logo" width="36" height="32" />
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
    </QueryClientProvider>
  );
}

export default App;
