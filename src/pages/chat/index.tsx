import React from 'react'
import { MyBox } from './style'
import classNames from 'classnames'

export default function chat() {
  return (
    <MyBox>
      <div className={classNames({ redColor: true, greenColor: true })}></div>
    </MyBox>
  )
}
