import { useMemo } from "react";
import "./App.css";

function App() {
  const websocket = useMemo(() => {
    return new WebSocket("ws://172.16.1.80:3000");
  }, []);

  const subscribe = async () => {
    websocket.send(
      JSON.stringify({
        event: "subscribe",
        data: "/assets",
      })
    );
    websocket.onmessage = (event) => {
      console.log(event.data);
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={subscribe}>subscribe</button>
      </header>
    </div>
  );
}

export default App;
