import Image from "next/image"
import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          illum excepturi iste molestiae beatae, nulla tenetur vel sit adipisci
          quod nobis eius blanditiis error asperiores reiciendis ad facere,
          exercitationem maiores.
        </p>
        <Link href={"/"} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  )
}

export default Card
