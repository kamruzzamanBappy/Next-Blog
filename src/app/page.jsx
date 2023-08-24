import Image from "next/image"
import Hero from 'public/hero.png'
import Button from "./components/button/Button"
import styles from './page.module.css'
export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.item}>
<h1 className={styles.title}>Better Desin For Your Digital Products</h1>
   <p className={styles.desc}>Turning Your Idea into Reality.We bring together the teams from the global tech Industry</p>
   
   <Button url="portfolio" text="See Our Works" />
   
   
    </div>
<div className={styles.item}>

    <Image src={Hero} alt="" className={styles.img} />
   </div>
   </div>
  )
}
