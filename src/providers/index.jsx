"use client"

import { ThemeContextProvider } from "@/context/ThemeContext"
import ThemeProvider from "./ThemeProvider"

export const Providers = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ThemeContextProvider>
  )
}
