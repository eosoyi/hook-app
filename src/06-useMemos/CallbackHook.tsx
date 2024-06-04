import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState<number>(0);
  const increment = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  return (
    <>
      <h1>useCallBack Hook : {counter}</h1>
      <hr />
      <ShowIncrement increment={increment}></ShowIncrement>
    </>
  )
}
