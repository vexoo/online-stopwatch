import { useEffect, useState } from "react";
import "./App.css";
import Div100vh from "react-div-100vh";
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import ModeSelector from "./components/ModeSelector";

function App() {
  const [mode, setMode] = useState<"stopwatch" | "countdown">("stopwatch");

  useEffect(() => {
    document.title = "Stopwatch";
  }, []);

  return (
    <Div100vh>
      <Header />
      <ModeSelector mode={mode} setMode={setMode} />
      {mode === "stopwatch" ? <Stopwatch /> : <Countdown />}
    </Div100vh>
  );
}

export default App;
