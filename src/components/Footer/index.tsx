// import gsap from 'gsap';
import React, { FC, useEffect } from 'react'
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Link } from '..'
import styles from '../../styles/Home.module.css'

const linkedin = 'https://www.linkedin.com/in/hicham-el-assari-1257ba227/';
const facebook = 'https://www.facebook.com/hicham.elassari';
const github = 'https://github.com/elassari19?tab=repositories';

const index: FC = () => {


  // useEffect(() => {

  //   gsap.from("#footer", {
  //     duration: .5,
  //     opacity: 0,
  //     y: 100,
  //     stagger: .2,
  //   });

  // }, []);

  return (
    <footer className={styles.footer}>
    <div style={{ paddingTop: 15 , display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      <Link id='footer' href={linkedin} style={{ width: 70 }}>
        <BsLinkedin size={25} />
      </Link>
      <Link id='footer' href={facebook} style={{ width: 70 }}>
        <BsFacebook size={28} />
      </Link>
      <Link id='footer' href={github} style={{ width: 70 }}>
        <BsGithub size={28} />
      </Link>
    </div>
  </footer>  )
}

export default index
