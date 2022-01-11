import React, { FC, useEffect, useRef } from 'react'
import { BsGithub } from 'react-icons/bs'
import { GiWorld } from 'react-icons/gi'
import { Footer, Header, Link, Skills } from '../../components'
import styles from '../../styles/Home.module.css'
import data from './data'
import gsap from 'gsap'
import { Reveal, Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Index: FC = () => {

  const sel = data.map(item=> `#${item.id}`);

  const mouseOver = (id: string) => {
    gsap.to(`#${id}`,{duration: .5, y: -10, scale: 1.2})
  }

  const mouseLeave = (id: string) => {
    gsap.to(`#${id}`,{duration: .5, y: +10, scale: 1})
  }

  return (
    <div className={styles.container} >

      <Header/>

      <main className={styles.main}>

        <Skills />

        <div className={styles.flex}>

          <Reveal>
            <Tween from={{y: 300, opacity: 0}} stagger={.2}>
          {
            data.map((item, idx)=>{
              const {title, technology, url, image, code, id} = item
              return(
                <div key={title} className={styles.card} id={id} onMouseOver={()=>mouseOver(id)} onMouseLeave={()=>mouseLeave(id)}>
                  {/* card title */}
                  <h3 style={{margin: '5px 0', textAlign: 'center', fontWeight: '600'}}>{title}</h3>

                  {/* card image */}
                  <div className={styles.cardItem} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}/>

                  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', margin: '5px 0', height: 30}}>
                  {/* visit the web*/}
                  <div style={{display: 'flex', alignItems: 'center'}}>
                      <span>Web</span>
                        <Link href={url} className={styles.visit} >
                          <GiWorld size={25} color='inherit' />
                        </Link>
                    </div>
                  {/* visit the code */}
                  <div style={{display: 'flex', alignItems: 'center'}}>
                      <span>Code</span>
                      <Link href={code} className={styles.visit}>
                        <BsGithub size={25} color='inherit' />
                      </Link>
                    </div>
                  </div>
  
                <hr style={{width: '100%', height: '1px', backgroundColor: '#fff'}} />
                
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 0 0 15px'}}>
                  {/* Technology used */}
                  <div style={{display: 'flex', flex: 1, justifyContent: 'space-evenly'}}>
                    {
                      technology.map((item, index)=>{
                        const {name, Logo} = item;
                        return(
                        <div key={index}>
                          <Link href={''} className={styles.visit} >
                            <Logo size={25} color='inherit' />
                          </Link>
                          <h5 style={{margin: 0}}>{name}</h5>
                        </div>
                        )
                      })
                    }
                  </div>
                
                </div>
              
                </div>
              )
            })
          }
          </Tween>
          </Reveal>
        </div>
      </main>

      <Footer/>

    </div>
  )
}

export default Index