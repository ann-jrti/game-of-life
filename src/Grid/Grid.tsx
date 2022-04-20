import './grid.styles.scss';
import React, { useEffect, useState } from 'react';

const GRID_ROWS = 30;
const GRID_COLS = 30;

export const Grid: React.FC = () => {
  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < GRID_ROWS; i++) {
      rows.push(new Array(GRID_COLS).fill(0));
    }
    return rows;
  });

  const printGrid = () => {
    return grid.map((rows, i) =>
      rows.map((col, k) => (
        <div key={`${i}${k}`} className={`grid__cell ${i}`} />
      ))
    );
  };

  return (
    <main
      style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 20px)` }}
      className="grid__container"
    >
      {printGrid()}
    </main>
  );
};
