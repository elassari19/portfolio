import React, { createElement, FC, useState } from 'react'
import { Footer, Header, Link } from '../../components'
import styles from '../../styles/Home.module.css'
import { reactTopics } from './data'

const index: FC = () => {

  const [content, setContent] = useState<number>(2)

  return (
    <div className={styles.container} >

      <Header/>

      <main className={styles.main}>
      <div className={styles.flex} style={{backgroundColor: '#ccc', maxWidth: 650, fontFamily: 'serif'}}>

        <div className={styles.content}>
        <div style={{padding: '25px'}}>

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

          <div className={styles.article}>
            {reactTopics[content].map((item: any, idx: number)=>{
              const { tag, str } = item;
              return(
                createElement(
                  tag,
                  {key:idx},
                  item.children?.map((item: any, index: number)=>createElement(item.tag, {key: index, href: '', style: {...item?.style}}, item.str))|| str
                )
              )
            })}
          </div>

        </div>
        </div>

        </div>
      </main>

      <Footer/>

    </div>
  )
}

export default index