import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
      </Head>
      <main className={styles.main}>
        <div className={styles.video}>
          <video controls width={'500px'}>
            <source src="/assets/video/Prueba-snow1.mp4" type='video/mp4'/>
          </video>
          <video controls width={'500px'} >
          <source src="/assets/video/Mi video 1.mp4" type='video/mp4'/>
          </video>
          <video controls width={'500px'} >
          <source src="/assets/video/The Background.mp4" type='video/mp4'/>
          </video>
         
        </div>
        <button><Link href="/imagenes">image</Link></button>
        
          
        
      </main>
    </>
  )
}
