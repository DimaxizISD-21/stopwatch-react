import React from 'react';

function BtnComponent(props) {
  return (
       <div>
        {(props.status === 0) ?
          <button className="stopwatch-btn stopwatch-btn-blu"
          onClick={props.start}>Старт</button> : ""
        }

        {(props.status === 1) ?
          <div>
            <button className="stopwatch-btn stopwatch-btn-red"
                onClick={props.stop}>Стоп</button> 

            <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={props.reset}>Сброс</button>
          </div> : ""
        }

        {(props.status === 2) ?
          <div>
            <button className="stopwatch-btn stopwatch-btn-blu"
                onClick={props.resume}>Продолжить</button> 

            <button className="stopwatch-btn stopwatch-btn-yel"
                onClick={props.reset}>Сброс</button>
          </div> : ""
         }
      </div>
  );
}

export default BtnComponent;
