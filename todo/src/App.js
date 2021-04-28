import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  function addItem(value) {
    const data = {
      name: value,
      id: Math.floor(Math.random() * 10000),
      isDone: false,
    };
    setList([...list, data]);
  }

  function add() {
    addItem(value);
    setValue('');
  }

  function remove(id) {
    const newList = list.filter((e) => e.id !== id);
    setList([...newList]);
  }

  function done(id) {
    const doneElement = list.find((e) => e.id === id);
    doneElement.isDone = true;
    setList([...list]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" className="btn btn-primary" onClick={add}>
          Küldés
        </button>
      </form>
      <div>
        {list.map((e) => (
          <>
            <div key={e.id} className={`${e.isDone ? 'done' : 'not-done'}`}>
              {e.name}

              <button
                type="button"
                className="btn btn-danger"
                onClick={() => remove(e.id)}
              >
                Törlés
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => done(e.id)}
              >
                Kész
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
