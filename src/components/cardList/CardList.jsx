import React from "react"
import styles from "./cardList.module.css"
import { Pagination } from "@/components/pagination/Pagination"
import Image from "next/image"
import Card from "../card/Card"

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <Pagination />
    </div>
  )
}
