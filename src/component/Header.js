import React from 'react'
import style from '../style/header.module.css'
export default function Header() {
  return (
    <div className={style.headBox}>
      <div className={style.left}>
        <img src='images\Asset 1_1 1.png' />
      </div>
      <div className={style.right}>
     <span className={style.headText}>Join a Race</span>
     <span className={style.headText}>LeaderBoard</span>
     <span className={style.login}>Login</span>
      </div>
    </div>
  )
}
