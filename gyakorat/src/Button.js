import React from 'react';

export default function Button({ tipus, szoveg, fuggveny }) {
  return (
    <button type="button" class={tipus} onClick={fuggveny}>
      {szoveg}
    </button>
  );
}
