import React from 'react'
import { decrement, increment,reset } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='mt-5 d-flex align-items-center justify-content-center flex-column w-100'>
      <h1 style={{fontSize:'70px'}}>{count}</h1>
        <div className='mt-5'>
          <button className='btn btn-success p-3'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          
          <button className='btn btn-warning ms-4 p-3'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button className='btn btn-danger ms-4 p-3'
            aria-label="Decrement value"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter