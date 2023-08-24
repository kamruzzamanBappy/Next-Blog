import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {


  return (
    < div className={styles.container}>
        <div>@2023 OceanX. All rights reserved</div>
    
<div className={styles.social}>
 
<Image src="/1.png"  width={15} height={15} className={styles.icon} alt="OceanX" />
<Image src="/2.png" width={15} height={15} className={styles.icon} alt="OceanX" />
<Image src="/3.png" width={15} height={15} className={styles.icon} alt="OceanX" />
<Image src="/4.png" width={15} height={15} className={styles.icon} alt="OceanX" />


  
</div>
</div>



  )
}

export default Footer