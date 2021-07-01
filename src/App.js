import React from 'react';
import Timer from "./Timer/Timer.js";
import TimerRx from "./TimerRx/TimerRx.js";

function App() {
  return (
    <div>
      <TimerRx startTime={10000} />
      
    </div>
  );
}

export default App;