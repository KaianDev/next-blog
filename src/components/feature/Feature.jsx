import React from "react"
import styles from "./feature.module.css"
import Image from "next/image"

export const Feature = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Hey, lama dev here!</strong> Discover my stories and creative
        ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            ratione quisquam rerum inventore explicabo.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            expedita ex sed tenetur animi amet, omnis fuga in soluta quod
            corporis quidem temporibus culpa, sequi saepe eius ipsum vel ut.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}
