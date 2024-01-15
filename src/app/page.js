"use client"
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [vlaue, setValue] = useState(0)
  const count = () => {
    setValue(vlaue + 1)
  }
  return (
    <main>
        <p>number: {vlaue}</p>
        <button onClick={count}>Click Me</button>
    </main>
  )
}
