import React from 'react';

function DisplayTimeComponent({ time }) {
  return (
    <div>
      <span className="label">{(`HH: ${Math.floor((time / (1000 * 60 * 60)) % 24)} `)}</span>
      <span className="label">{(`MM: ${Math.floor(time / 6000)} `)}</span>
      <span className="label">{(`SS: ${Math.floor((time / 100) % 60)} `)}</span>
      {/* Uncomment to add milliseconds */}
      {/* <span>{(`MS: ${Math.floor(time % 100)}`)}</span> */}
    </div>
  );
}

export default DisplayTimeComponent;
