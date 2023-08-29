import Image from 'next/image';
import { notFound } from "next/navigation";
import styles from './page.module.css';
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{cache:"no-store"});
  if (!res.ok) {
  return notFound()
  }
 
  return res.json();
}

export async function generateMetaData({params}){
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}



const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
   <div className={styles.container}>
<div className={styles.top}>
  <div className={styles.info}>
    <h1 className={styles.title}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex commodi
    </h1>
    <p1 className={styles.desc}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corporis nam exercitationem voluptate? Ut, tempora. Ullam consequatur doloribus blanditiis numquam pariatur ratione, deleniti illo reprehenderit reiciendis ex inventore ipsum fuga.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nisi harum provident recusandae autem maxime a, voluptatibus et sequi tenetur saepe itaque laboriosam cumque aliquid dignissimos. Officia doloremque pariatur ipsa.
    </p1>
<div className={styles.author}>
<Image src="https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
alt=""
width={40}
height={40}
className={styles.avatar}

/>
<span className={styles.username}>KB07</span>
</div>


  </div>

<div className={styles.imageContainer}>
<Image src="https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
alt=""
fill={true}
className={styles.Image}
/>
</div>
</div>
<div className={styles.content}>
  <p className={styles.text}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda deserunt illo corporis unde esse pariatur optio eos, officia beatae blanditiis. Iusto asperiores labore doloremque tempore, tempora mollitia pariatur eaque.
  </p>
</div>
   </div>




  )
}

export default BlogPost