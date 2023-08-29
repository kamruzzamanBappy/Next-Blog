"use client"
import Image from 'next/image'
import Button from '../components/button/Button'
import styles from './page.module.css'

export const metadata = {
  title: 'OceanX Contact Info',
  description: 'This is Contact Page',
}


const Contact = () => {
  return (
    <div className={styles.container}>
<h1 className={styles.title}>Let keep in touch </h1>
<div className={styles.content}>
<div className={styles.imgContainer}>
<Image
src="/contact.png"
alt=""
fill={true}
className={styles.Image}

/>

</div>
<form className={styles.form}>
<input type="text" placeholder='name' className={styles.input} />
<input type="text" placeholder='email' className={styles.input} />
<textarea className={styles.textArea}
placeholder="message"
cols="30"
rows="10"

></textarea>

<Button url="#" text="Send" />
</form>

</div>
    </div>
  )
}

export default Contact