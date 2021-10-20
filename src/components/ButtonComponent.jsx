import 'bulma';

function ButtonComponent({
  start,
  stop,
  wait,
  reset,
  resume,
  status,
}) {
  return (
    <div>
      {(status === 0) ? <button className="button is-link" type="button" onClick={start}>Start</button> : ''}

      {(status === 1)
        ? (
          <div>
            <button className="button is-link" type="button" onClick={stop}>Stop</button>
            <button className="button is-link" type="button" onDoubleClick={wait}>Wait</button>
            <button className="button is-link" type="button" onClick={reset}>Reset</button>
          </div>
        ) : '' }

      {(status === 2) ? (
        <div>
          <button className="button is-link" type="button" onClick={resume}>Resume</button>
          <button className="button is-link" type="button" onClick={reset}>Reset</button>
        </div>
      ) : '' }

    </div>
  );
}

export default ButtonComponent;
