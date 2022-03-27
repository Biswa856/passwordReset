import React from 'react'
import style from '../style/footer.module.css'
export default function Footer() {
  return (
    <div >
        <div className={style.footerBox}>
      <span className={style.text} >About Us</span>
      <span className={style.text} >Privacy Policy</span>
      <span className={style.text} >Tutorials</span>
      <span className={style.text} >Terms Of Service</span>
      </div >
    </div>
  )
}
