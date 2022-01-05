import Link from 'next/link'
import React, { FC, ReactChild } from 'react'
import { Url } from 'url'
import styles from '../../styles/Home.module.css'

interface IProps {
  children?: ReactChild;
  title?: string;
  href: Url | string;
  style?: {};
  onClick?: any;
  id?: string;
}

const index: FC<IProps> = ({ children, href, style, onClick, title, id }) => {
  return (
    <Link href={href} >
      <a style={style} className={styles.anchor} onClick={onClick} id={id}>
        {title}
        {children}
      </a>
    </Link>
  )
}

export default index