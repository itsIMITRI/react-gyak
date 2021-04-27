import React, { useState, useEffect } from 'react';
import Button from './Button';

export default function Stopper() {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [kor, setKor] = useState([]);

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
  function korido() {
    const ujKor = { id: kor.length + 1, time: timer.toFixed(2) };
    setKor([...kor, ujKor]);
  }

  return (
    <div>
      <h1>{timer.toFixed(2)}</h1>
      <Button tipus="btn btn-danger m-2" fuggveny={stop} szoveg="Stop" />
      <Button tipus="btn btn-warning m-2" fuggveny={reset} szoveg="Reset" />
      <Button tipus="btn btn-success m-2" fuggveny={start} szoveg="Start" />
      <Button tipus="btn btn-info m-2" fuggveny={korido} szoveg="Köridő" />
      <div>
        {kor.map(function (e) {
          return (
            <div>
              {e.id} .kor {e.time}
            </div>
          );
        })}
      </div>
    </div>
  );
}
