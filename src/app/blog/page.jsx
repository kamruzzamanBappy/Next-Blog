import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

async function getData() {
  const res = await fetch( "https://jsonplaceholder.typicode.com/posts",{next:{revalidate:10},});
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}







const Blog =async () => {
  const data = await getData()
  return (
    <div className={styles.mainContainer}>
      {data.map((item)=>(
<Link href="/blog/testId" className={styles.container} key={item.id}>
<div className={styles.imageContainer}>



  <Image
  src="https://images.pexels.com/photos/4857738/pexels-photo-4857738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  alt=""
  width={400}
  height={250}
  className={styles.Image}
  />
</div>
<div className={styles.content}>
  <h1 className={styles.title}>{item.title}</h1>
  <p className="styles desc">Description</p>
</div>
</Link>
))}



    </div>
  );
};

export default Blog;