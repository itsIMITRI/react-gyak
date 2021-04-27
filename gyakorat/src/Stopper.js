import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Stopper() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (running) {
      const timer = setInterval(function () {
        setTimer((timer) => timer + 0.01);
      }, 10);
      return () => clearInterval(timer);
    }
  }, [running]);

  function start() {
    setRunning(true);
  }

  function stop() {
    setRunning(false);
  }
  function reset() {
    setTimer(0);
  }
  return (
    <div>
      <h1>{timer.toFixed(2)}</h1>
      <Button tipus="btn btn-danger m-2" fuggveny={stop} szoveg="Stop" />
      <Button tipus="btn btn-warning m-2" fuggveny={reset} szoveg="Reset" />
      <Button tipus="btn btn-success m-2" fuggveny={start} szoveg="Start" />
    </div>
  );
}
