import React, { FC } from 'react'
import { Tween } from 'react-gsap'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Footer, Header, Link } from '../../components'
import styles from '../../styles/Home.module.css'

const index: FC = () => {

  const social = [
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
    <div className={styles.container} >

      <Header/>

      <main className={styles.main}>
        <div className={styles.flex} style={{flexDirection: 'column', flex: 1}}>

          <Tween from={{x: 1000, opacity: 0}} duration={1} stagger={.2}>
            <div className={styles.contact}>
              <h3>
                Get in touch
                If you wanna get in touch, talk to me about a project collaboration or just say hi,
                fill up the awesome form below or send an email to 
                <span> elassari19@gmail.com </span>.
              </h3>
            </div>

            <div className={styles.contact} style={{color: '#fff'}}>
              <h3>
                Let's get social
                Follow my online fan page on 
                <div style={{margin: 15}}><Link style={{backgroundColor: '#555', color: '#eee', padding: 5, borderRaduis: 3}} href={social[0].href}><>{social[0].title} <span>{social[0].icon}</span></></Link></div>
                <div style={{margin: 15}}><Link style={{backgroundColor: '#555', color: '#eee', padding: 5, borderRaduis: 3}} href={social[2].href}><>{social[2].title} <span>{social[2].icon}</span></></Link></div>
                <div style={{margin: 15}}><Link style={{backgroundColor: '#555', color: '#eee', padding: 5, borderRaduis: 3}} href={social[1].href}><>{social[1].title} <span>{social[1].icon}</span></></Link></div>
              </h3>
            </div>

          </Tween>

        </div>
      </main>

      <Footer/>

    </div>
  )
}

export default index