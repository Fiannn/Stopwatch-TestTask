import './App.css';
import React, { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import DisplayTimeComponent from './components/DisplayTimeComponent';
import ButtonComponent from './components/ButtonComponent';

function App() {
  const [time, setTime] = useState(0);
  const [isWatchOn, setIsWatchOn] = useState(false);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    const unsubscribe = new Subject();

    interval(10)
      .pipe(takeUntil(unsubscribe))
      .subscribe(() => {
        if (isWatchOn) {
          setTime(val => val + 1);
        }
      });

    return () => {
      unsubscribe.next();
      unsubscribe.complete();
    };
  }, [isWatchOn]);

  const handleStart = () => {
    setIsWatchOn(prevState => !prevState);
    setStatus(1);
  };

  const handleResume = () => {
    handleStart();
  };

  const handleStop = () => {
    setTime(0);
  };

  let timer;

  const handleWait = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (time !== 0) {
        setIsWatchOn(false);
      }

      setStatus(2);
    }, 300);
  };

  const handleReset = () => {
    setTime(0);
    setIsWatchOn(false);
    setStatus(0);
  };

  return (
    <div>
      <div>
        <div>
          <div className="label">Stopwatch</div>
          <div>
            <DisplayTimeComponent
              time={time}
            />
            <ButtonComponent
              start={handleStart}
              stop={handleStop}
              wait={handleWait}
              reset={handleReset}
              resume={handleResume}
              status={status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
