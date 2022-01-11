import gsap from 'gsap'
import React, { createElement, FC, useEffect, useRef, useState } from 'react'
import { Tween } from 'react-gsap'
import { Footer, Header, Link } from '../../components'
import styles from '../../styles/Home.module.css'
import { reactTopics } from './data'

const Index: FC = () => {

  const [content, setContent] = useState<number>(2)

  const refs = useRef<any>();
  refs.current = [];

  useEffect(() => {

    refs.current.forEach((el: any, index: number) => {

      gsap.fromTo(el, {
        autoAlpha: 0,
        x: -1000,
      }, {
        duration: 1, 
        autoAlpha: 1,
        ease: 'none',
        x: 0,
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=300',
          toggleActions: 'play none none restart'
        }
      });

    });
  }, [])

  const addToRefs = (el: any) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
  return (
    <div className={styles.container} >

      <Header/>

      <main className={styles.main}>

      <div style={{backgroundColor: '#eee8'}}>
      <div className={styles.flex} style={{maxWidth: 650, fontFamily: 'serif'}}>

        <div className={styles.content}>

        <Tween stagger={.5} >
          <div>
            {
              reactTopics[0].map((item: any, idx)=>createElement(item.tag,{key: idx}, item.str))
            }
          </div>

          <div>
            {
              reactTopics[1].map((item: any, idx: number)=>createElement(item.tag,{key: idx, onClick: ()=>setContent(idx>1?idx+1:2), href: '/articles', style: {...item?.style}}, item.str))
            }
          </div>

            {reactTopics[content].map((item: any, idx: number)=>{
              const { tag, str } = item;
              return(
                <div className={styles.article} key={idx}>
                  {createElement(
                  tag,
                  {id: 'item', ref: addToRefs},
                  item.children?.map((item: any, index: number)=>createElement(item.tag, {key: index, ref: addToRefs, href: '', style: {...item?.style}}, item.str))|| str
                  )}
                </div>
              )
            })}

        </Tween>
        </div>

        </div>
        </div>
      </main>

      <Footer/>

    </div>
  )
}

export default Index