import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Stopper from './Stopper';
import Frame from './Frame';

function App() {
  const [szamlalo, setSzamlalo] = useState(0);
  function Novel() {
    setSzamlalo(szamlalo + 1);
  }
  function Csokkent() {
    setSzamlalo(szamlalo - 1);
  }
  function Reset() {
    setSzamlalo(0);
  }
  return (
    <div>
      <div className="szamlalo">
        <h1>{szamlalo}</h1>
        <Button
          tipus="btn btn-danger m-2"
          fuggveny={Csokkent}
          szoveg="csökkent"
        />
        <Button
          tipus="btn btn-warning m-2"
          fuggveny={Reset}
          szoveg="nulláz"
        ></Button>
        <Button
          tipus="btn btn-success m-2"
          fuggveny={Novel}
          szoveg="növel"
        ></Button>
      </div>
      <div className="stopper">
        <Stopper />
      </div>
      <div>
        <Frame text="ember" color="green">
          <Frame text="fiú" color="blue">
            <Frame text="Peti" color="yellow" />
            <Frame text="Feri" color="yellow" />
          </Frame>
          <Frame text="lány" color="red">
            <Frame text="Panka" color="pink" />
            <Frame text="Juliska" color="pink" />
          </Frame>
        </Frame>
      </div>
    </div>
  );
}

export default App;
