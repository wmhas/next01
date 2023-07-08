import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link  from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
          <h1>HELLO WORLD</h1>
          <Link rel="stylesheet" href="/about">got to about page</Link> 
    </main>
  )
}
