import { useRouter } from 'next/router'
import React, { FC, MouseEvent, useEffect, useRef, useState } from 'react'
import { Link } from '..'
import styles from '../../styles/Home.module.css'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
// import gsap from 'gsap';

const index: FC = () => {

  const {pathname} = useRouter();

  const [Menu, setMenu] = useState<boolean>(false);
  const handleMenu = (bool: boolean) => {
    setMenu(bool)
  }

  // useEffect(() => {

  //   gsap.from("#anchor", {
  //     duration: .5,
  //     opacity: 0,
  //     y: -100,
  //     stagger: .2,
  //   });

  // }, []);

  return (
    <div style={{paddingTop: Menu ? 60: 20}} className='box'>

      <header className={styles.header}>

          <div style={{flex: 1}}>{pathname!=='/'&& <Link href={'/'} title='&lt; Back' />}</div>

        <div className={styles.header}>
          <Link
            href={'/'}
            style={{color: pathname=='/' ? '#1e5' : '#fff'}}
            title='Home'
            id='anchor'
           />

          <Link
            href={'/project'}
            style={{color: pathname=='/project' ? '#1e5' : '#fff'}}
            title='Project'
            id='anchor'
           />

          <Link
            href={'/about'}
            style={{color: pathname=='/about' ? '#1e5' : '#fff'}}
            title='About'
            id='anchor'
           />

          <Link
            href={'/articles'}
            style={{color: pathname=='/articles' ? '#1e5' : '#fff'}}
            title='Articles'
            id='anchor'
           />

        </div>

      </header>

      <nav className={styles.nav}>

        <div>{pathname!=='/'&& <Link href={'/'} title='&lt; Back' />}</div>

          <div className={styles.menu} style={{right: Menu?0:'-85%', backgroundColor: Menu?'#000':'transparent'}}>

            <div style={{alignSelf: 'start'}}>
              {!Menu
                ? <AiOutlineMenuFold onClick={()=>handleMenu(true)} size={20} color='#1e5' />
                : <AiOutlineMenuUnfold onClick={()=>handleMenu(false)} size={20} color='#1e5' />
              }
            </div>

            <div className={styles.item}>
              <Link
                href={'/'}
                style={{color: pathname=='/' ? '#1e5' : '#fff'}}
                title='Home'
              />
              
              <Link
                href={'/project'}
                style={{color: pathname=='/project' ? '#1e5' : '#fff'}}
                title='Project'
              />
              
              <Link
                href={'/about'}
                style={{color: pathname=='/about' ? '#1e5' : '#fff'}}
                title='About'
              />
              
              <Link
                href={'/articles'}
                style={{color: pathname=='/articles' ? '#1e5' : '#fff'}}
                title='Articles'
              />
              
            </div>

            <div></div>

          </div>


      </nav>

    </div>
  )
}

export default index
