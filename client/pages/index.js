import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.bodyy}></div>
    </div>
  )
}
