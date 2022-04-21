import './grid.styles.scss';
import React, { useEffect, useId, useState, useCallback, useRef } from 'react';

const GRID_ROWS = 20;
const GRID_COLS = 20;
const NEIGHBORS = {
  NW: [-1, -1],
  N: [-1, 0],
  NE: [1, 1],
  W: [0, -1],
  E: [0, 1],
  SW: [1, -1],
  S: [1, 0],
  SE: [-1, 1],
};

export const GridCopy = () => {
  const [refresh, setRefresh] = useState(false);
  const [start, setStart] = useState(false);
  const [speed, setSpeed] = useState(1000);
  const [grid, setGrid] = useState([]);
  const startRef = useRef(start);
  startRef.current = start;

  const generateGrid = () => {
    const allRows = [];
    for (let i = 0; i < GRID_ROWS; i++) {
      allRows.push(new Array(GRID_COLS).fill(0));
    }
    return allRows;
  };

  useEffect(() => {
    const grid = generateGrid();
    setGrid(grid);
  }, []);

  function runSimulation() {
    if (!startRef.current) {
      return;
    }
    setGrid((prevGrid) => {
      const newGrid = prevGrid.map((row, i) => {
        return row.map((_, j) => {
          let neighbors = 0;
          Object.values(NEIGHBORS).forEach((pos) => {
            const x = i + pos[0];
            const y = j + pos[1];
            if (x >= 0 && x < GRID_ROWS && y >= 0 && y < GRID_COLS) {
              neighbors += prevGrid[x][y];
            }
          });
          if (neighbors < 2 || neighbors > 3) return 0;
          if (neighbors === 3) return 1;
          return prevGrid[i][j];
        });
      });
      return newGrid;
    });
  }

  const handleStart = (e) => {
    start ? setStart(false) : setStart(true);
    console.log('click start');
  };

  useEffect(() => {
    if (start) {
      console.log('keys', Object.values(NEIGHBORS));
      console.log('here');
      console.log(start);
      setInterval(() => {
        runSimulation();
      }, speed);
    }
  }, [start]);

  const handleClick = (i, k) => {
    const value = `${i}${k}`;
    grid[i][k] ? (grid[i][k] = 0) : (grid[i][k] = 1);
    refresh ? setRefresh(false) : setRefresh(true);
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
      <button onClick={handleStart}>{start ? 'stop' : 'start life'}</button>
      <main
        style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 20px)` }}
        className="grid__container"
      >
        {printGrid()}
      </main>
    </>
  );
};
