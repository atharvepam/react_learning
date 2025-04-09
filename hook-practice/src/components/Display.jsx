import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/context'
function Display() {
    const counter = useContext(CounterContext)
  return (
    <div>Display:{counter}</div>
  )
}
export default Display