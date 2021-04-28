import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      return;
    }
  }

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
    const newDone = list.find((e) => e.id === id);
    newDone.isDone = !newDone.isDone;
    setList([...list]);
  }

  return (
    <div className="kula">
      <form onSubmit={handleSubmit}>
        <input
          key={value.id}
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit" onClick={add}>
          Küldés
        </button>
      </form>
      <div>
        {list.map((e) => (
          <div className={`${e.isDone ? 'done' : 'not-done'}`}>
            {e.name}
            <button
              className={`${
                e.isDone ? 'btn btn-danger' : 'btn btn-danger disabled'
              }`}
              onClick={() => remove(e.id)}
            >
              Törlés
            </button>
            {!e.isDone ? (
              <button className="btn btn-success" onClick={() => done(e.id)}>
                Kész
              </button>
            ) : (
              <button className="btn btn-warning" onClick={() => done(e.id)}>
                Nincs kész
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
