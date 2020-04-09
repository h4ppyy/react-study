import React from 'react';

const Contents = (props) => {
  return (
    <>
      <div class="dev">
        {props.counter}
        <button onClick={props.onPlusCount} type="button">Count up!</button>
        <button onClick={props.onMinusCount} type="button">Count down!</button>
      </div>
    </>
  )
}

export default Contents;