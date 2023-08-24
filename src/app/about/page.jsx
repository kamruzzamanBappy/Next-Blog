import Image from "next/image"
import Button from "../components/button/Button"
import styles from './page.module.css'
const About = () => {
  return (
    <div className={styles.container}>
<div className={styles.imgContainer}>
<Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt=""

className={styles.img}/>
<div className={styles.imgText}>
  <h1 className={styles.imgTitle}>Digital Storytellers</h1>
  <h2 className={styles.imgDesc}>Handcrafting award winning digital experinces</h2>
</div>
</div>

<div className={styles.textContainer}>
<div className={styles.item}>
<h1 className={styles.title}>Who are We?</h1>
<p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, fuga officiis velit obcaecati accusantium optio quaerat asperiores architecto quod dolore nisi
<br />
<br /> - Dynamic Website
<br />
<br /> - Fast and Handy
<br />
<br /> - Mobile Apps
 </p>
</div>

<div className={styles.item}>
<h1 className={styles.title}>What We Do?</h1>
<p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, deserunt quaerat! Facilis sint laboriosam doloribus deleniti similique magnam impedit corrupti distinctio, laborum eum eos excepturi, doloremque voluptas vitae nam rem!
  <br />
  <br />
  Dynamic Website fast & handy for mobile.</p>

<Button url="/contact" text="Contact" />

</div>


</div>


    </div>
  )
}

export default About