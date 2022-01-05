import React, { FC } from 'react'
import { BsEye, BsGithub } from 'react-icons/bs'
import { Footer, Header, Link } from '../../components'
import styles from '../../styles/Home.module.css'

const index: FC = () => {
  return (
    <div className={styles.container} >

      <Header/>

      <main className={styles.main}>
        <div className={styles.flex}>
          
          {Array(9).fill('').map( (_,index) =>
            <Link key={index} href={'/'} >
              <div className={styles.card}>
                <h1>Project one</h1>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                  <BsEye style={{width: 20, height: 20}}/>
                  <BsGithub style={{width: 20, height: 20}}/>
                </div>
              </div>
            </Link>
          )}

        </div>
      </main>

      <Footer/>

    </div>
  )
}

export default index
