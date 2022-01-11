import React, { FC, useEffect } from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from '..'
import styles from '../../styles/Home.module.css'

const Index: FC = () => {

  const data = [
    {
      title: 'LinkedIn',
      icon: <BsLinkedin size={20} color='#fff' />,
      href: 'https://www.linkedin.com/in/hicham-el-assari-1257ba227/',
    },
    {
      title: 'Facebook',
      icon: <BsFacebook size={20} color='#fff' />,
      href: 'https://www.facebook.com/hicham.elassari',
    },
    {
      title: 'Github',
      icon: <BsGithub size={20} color='#fff' />,
      href: 'https://github.com/elassari19?tab=repositories',
      color: '#24292f'
    }
  ]

  return (
    <footer className={styles.footer}>
    <div style={{ padding: 15 , display: 'flex', flexDirection: 'row', alignItems: 'center'}}>

      {
        data.map((item, idx) => (
          <Link key={idx} href={item.href} style={{ backgroundColor: item.color || '#0a66c2', padding: '5px 10px', borderRadius: 2, margin: '0 10px', textDecoration: 'none'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 90, fontSize: 15}}>
              <span style={{color: '#fff'}}>{item.title}</span> {item.icon}
            </div>
        </Link>
        ))
      }

    </div>
  </footer>  )
}

export default Index
