import React from 'react'
import { headerLinks } from '@/common/local-data'
import { NavLink } from 'react-router-dom'

// import styles  from './index.module.scss'
import { HeaderWrapper } from './style'
export default function AppHeader() {
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="select-list">
          {headerLinks.map((item, index) => {
            return (
              <div className="select-item" key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </HeaderWrapper>
  )
}
