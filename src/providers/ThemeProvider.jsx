import { useTheme } from "@/context/ThemeContext"
import { useEffect, useState } from "react"

const ThemeProvider = ({ children }) => {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) return <div className={theme}>{children}</div>
}

export default ThemeProvider
