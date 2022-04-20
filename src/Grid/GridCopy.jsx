import './grid.styles.scss';
import React, { useEffect, useState } from 'react';

const GRID_ROWS = 20;
const GRID_COLS = 20;

export const GridCopy = () => {
  const [refresh, setRefresh] = useState(false);
  const [start, setStart] = useState(false);

  const [grid, setGrid] = useState(() => {
    const rows = [];
    for (let i = 0; i < GRID_ROWS; i++) {
      rows.push(new Array(GRID_COLS).fill(0));
    }
    return rows;
  });

  const handleStart = (e) => {
    e.preventDefault();
    console.log('start');
    start ? setStart(false) : setStart(true);
  };

  const handleClick = (i, k) => {
    const value = `${i}${k}`;
    console.log(value);
    grid[i][k] ? (grid[i][k] = 0) : (grid[i][k] = 1);
    refresh ? setRefresh(false) : setRefresh(true);
    console.log(grid);
  };

  const printGrid = () => {
    return grid.map((rows, i) =>
      rows.map((col, k) => (
        <div
          key={`${i}${k}`}
          style={{ backgroundColor: grid[i][k] ? 'blue' : 'white' }}
          className={`grid__cell ${i}`}
          onClick={() => handleClick(i, k)}
        />
      ))
    );
  };

  return (
    <>
      <button onClick={handleStart}>{start ? 'stop' : 'start'}</button>
      <main
        style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 20px)` }}
        className="grid__container"
      >
        {printGrid()}
      </main>
    </>
  );
};
