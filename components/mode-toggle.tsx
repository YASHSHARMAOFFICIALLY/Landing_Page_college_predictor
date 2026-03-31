"use client"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"

export const ModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="size-4" />

  const isDark = resolvedTheme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="size-6 flex items-center justify-center relative"
    >
      <SunIcon
        size={14}
        className="absolute cursor-pointer transition-all duration-500 ease-in-out"
        style={{
          transform: isDark ? "rotate(180deg) scale(0)" : "rotate(0deg) scale(1)",
          opacity: isDark ? 0 : 1,
        }}
      />
      <MoonIcon
        size={14}
        className="absolute cursor-pointer transition-all duration-500 ease-in-out"
        style={{
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-180deg) scale(0)",
          opacity: isDark ? 1 : 0,
        }}
      />
    </button>
  )
}