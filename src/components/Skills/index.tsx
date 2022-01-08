import React from 'react'
import { Reveal, Tween } from 'react-gsap'
import data from './data'
import styles from '../../styles/Home.module.css'
import gsap from 'gsap'

function index() {


  const mouseOver = (id: string) => {
    gsap.to(`#${id}`,{duration: .5, y: -5, skewX: -5, boxShadow: '3px 20px 8px #0008'})
  }

  const mouseLeave = (id: string) => {
    gsap.to(`#${id}`,{duration: .5, y: +5, skewX: 0, boxShadow: '1px 3px 5px #000'})
  }

  return (
    <div className={styles.skill}>
      <Reveal>
        <Tween from={{y: -100, opacity: 0}} stagger={.2}>
          {
            data.map((item)=>{
              const { name, Logo, id } = item;
              return(
                <div key={id} className={styles.skillItem} id={id} onMouseOver={()=>mouseOver(id)} onMouseLeave={()=>mouseLeave(id)}>
                  <span>{name}</span>
                  <Logo size={20} color={'inheri'} />
                </div>
              )}
              )
            }
        </Tween>
      </Reveal>
    </div>
  )
}

export default index
