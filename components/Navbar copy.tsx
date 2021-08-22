// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()
  const location = router.pathname
  return (
    <div className='header'>
      <span className='active'>
        <a
          href='https://github.com/ArcadeCity/onlysats'
          target='_blank'
          rel='noreferrer'
          className='link'
        >
          CODE
        </a>
      </span>
    </div>
  )
}
