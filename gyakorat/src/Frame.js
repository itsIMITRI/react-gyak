import React from 'react';

export default function Frame({ text, color, children }) {
  return (
    <div className={color}>
      <div>{text}</div>
      {children}
    </div>
  );
}
