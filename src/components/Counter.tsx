import React, { useState, useCallback } from 'react'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { increment, decrement, incrementByAmount } from '../store/slices/counterSlice'

const Counter = () => {
  const count = useAppSelector((state: { counter: { value: number } }) => state.counter.value)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0

  const handleIncrementByAmount = useCallback(() => {
    dispatch(incrementByAmount(incrementValue))
  }, [dispatch, incrementValue])

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="text-center">
        <span className="text-4xl font-bold">{count}</span>
        <div className="flex gap-2 mt-4 justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
            className="border p-2 rounded mr-2"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={handleIncrementByAmount}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter 