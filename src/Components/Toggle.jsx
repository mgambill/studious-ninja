
import { useState, Component } from 'react'
export default function Toggle({ children }) {

  const [on, setOn] = useState(false)
  const toggle = () => setOn(x => !x)

  return children({
    on,
    toggle
  })
}
