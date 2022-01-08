import { TiHtml5,TiCss3 } from 'react-icons/ti'
import { FaSass, FaReact } from 'react-icons/fa'
import { SiJavascript, SiStyledcomponents } from 'react-icons/si'
import { ReactNode } from 'react'

interface Itechnology {
  Logo: ReactNode;
  name: string;
}

export interface IProject {
  title: string;
  technology: Itechnology[];
  url: string;
  imgae: string;
  code: string;
  id: string;
}

export default [
  {
    title: 'Hotel Reservations',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo: FaSass, name: 'Sass'}],
    url: 'https://elassari19.github.io/reservation/',
    image: '/reservation.bmp',
    code: 'https://github.com/elassari19/reservation',
    id: 'data0'
  },
  {
    title: 'Github User Info',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/github-user-info/#/',
    image: '/github.bmp',
    code: 'https://github.com/elassari19/github-user-info',
    id: 'data1'
  },
  {
    title: 'E-commerce',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/e_commerce/',
    image: '/ecommerce.bmp',
    code: 'https://github.com/elassari19/e_commerce',
    id: 'data2'
  },
  {
    title: 'CRUD App',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/crud/',
    image: '/crud.bmp',
    code: 'https://github.com/elassari19/crud',
    id: 'data3'
  },
  {
    title: 'Books Shopping Cart',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo:SiStyledcomponents, name: 'Styled-C'}],
    url: 'https://elassari19.github.io/shopping_card/',
    image: '/books.bmp',
    code: 'https://github.com/elassari19/shopping_card',
    id: 'data4'
  },
  {
    title: 'Memory Game',
    technology: [{Logo: FaReact, name: 'ReactJS'},{Logo: TiCss3, name: 'CSS3'}],
    url: 'https://elassari19.github.io/react_memory_game/',
    image: '/game.bmp',
    code: 'https://github.com/elassari19/react_memory_game',
    id: 'data5'
  },
  {
    title: 'Book Library',
    technology: [{Logo: TiHtml5, name: 'HTML5'},{Logo: TiCss3, name: 'CSS3'},{Logo: SiJavascript, name: 'Javascript'}],
    url: 'https://elassari19.github.io/bookLibrary/',
    image: '/book.bmp',
    code: 'https://github.com/elassari19/bookLibrary',
    id: 'data6'
  },
]