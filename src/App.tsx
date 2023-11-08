import { useEffect, useRef, useState } from "react";
import "./App.css";
import Div100vh from "react-div-100vh";
import Stopwatch from "./components/Stopwatch";
import Countdown from "./components/Countdown";
import Header from "./components/Header";
import ModeSelector from "./components/ModeSelector";
import AlertPlayer from "./components/AlertPlayer";
import AlertSelector from "./components/AlertSelector";

function App() {
  const [mode, setMode] = useState<"stopwatch" | "countdown">("stopwatch");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.title = "Stopwatch";
  }, []);

  return (
    <Div100vh>
      <Header />
      <ModeSelector mode={mode} setMode={setMode} />
      {mode === "stopwatch" && <Stopwatch />}
      {mode === "countdown" && (
        <>
          <AlertSelector audioRef={audioRef} />
          <Countdown audioRef={audioRef} />
        </>
      )}
      <AlertPlayer audioRef={audioRef} />
    </Div100vh>
  );
}

export default App;
