import React, { useRef } from 'react'

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(inputRef)

  const onFocus = () => {
    if (inputRef.current) {
      inputRef.current.select();
    }
  }

  return (
    <>
      <h1>Focus screen</h1>
      <hr />
      <input ref={inputRef} type="text" placeholder='ingrese su nombre' className='form-control' />
      <button className='btn btn-primary mt-2' onClick={onFocus}>set focus</button>
    </>
  )
}
