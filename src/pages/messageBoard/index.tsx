import React from 'react'
import SendInput from './components/sendInput'
import Top from './components/top'
import { Board } from './style'

export default function messageBoard() {
  return (
    <Board>
      <h2>留言板</h2>
      <Top />
      <SendInput />
    </Board>
  )
}
