"use client"

import Image from "next/image"
import styles from "./themeToggle.module.css"
import { useTheme } from "@/context/ThemeContext"

export const ThemeToggle = () => {
  const { theme, toggle } = useTheme()

  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="moon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? {
                left: 1,
                backgroundColor: "#0f172a",
              }
            : {
                right: 1,
                backgroundColor: "#fff",
              }
        }></div>
      <Image src="/sun.png" alt="sun" width={14} height={14} />
    </div>
  )
}
