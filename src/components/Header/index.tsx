import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { Link } from '..'
import styles from '../../styles/Home.module.css'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io'

const index: FC = () => {

  const {pathname, back} = useRouter();

  const [Menu, setMenu] = useState<boolean>(false);
  const handleMenu = (bool: boolean) => {
    setMenu(bool)
  }

  const pages = [
    {
      href: '/',
      title: 'home'
    },
    {
      href: '/work',
      title: 'work'
    },
    {
      href: '/articles',
      title: 'articles'
    },
    {
      href: '/about',
      title: 'about'
    },
  ]

  const navigate = pages.map(({href, title}, index)=>(
    <Link
      key={index}
      href={href}
      style={{color: pathname==href ? '#fff' : '#fff8', textDecoration: 'none', fontSize: 18, letterSpacing: 1.5, fontWeight: '600'}}
      title={title}
    />
  ))

  return (
    <div style={{paddingTop: Menu ? 60: 20}} className='box'>

      <header className={styles.header}>

        <div style={{flex: 1}}>
          <Link href={'/'} style={{textDecoration: 'none'}}>
            <span style={{backgroundColor: '#eee8', color: '#000', padding: 10, fontWeight: '600', borderRadius: 6}}>Portfolio</span>
          </Link>
        </div>

        <div className={styles.header}>
          {navigate}
        </div>

      </header>

      <nav className={styles.nav}>

          <div className={styles.menu} style={{right: Menu?0:'-85%', backgroundColor: Menu?'#000':'transparent'}}>

          <IoIosArrowBack size={25} color={'#fff'} onClick={()=>back()} />

            <div style={{alignSelf: 'start'}}>
              {!Menu
                ? <AiOutlineMenuFold onClick={()=>handleMenu(true)} size={20} color='#1e5' />
                : <AiOutlineMenuUnfold onClick={()=>handleMenu(false)} size={20} color='#1e5' />
              }
            </div>

            <div className={styles.item} style={{flex: 1}}>
              {navigate}
            </div>

          </div>

      </nav>

    </div>
  )
}

export default index
