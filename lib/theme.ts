import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Base theme configuration
export const theme = {
  // Color schemes
  colors: {
    light: {
      background: "hsl(0 0% 100%)",
      foreground: "hsl(240 10% 3.9%)",
      card: "hsl(0 0% 100%)",
      "card-foreground": "hsl(240 10% 3.9%)",
      popover: "hsl(0 0% 100%)",
      "popover-foreground": "hsl(240 10% 3.9%)",
      primary: "hsl(240 5.9% 10%)",
      "primary-foreground": "hsl(0 0% 98%)",
      secondary: "hsl(240 4.8% 95.9%)",
      "secondary-foreground": "hsl(240 5.9% 10%)",
      muted: "hsl(240 4.8% 95.9%)",
      "muted-foreground": "hsl(240 3.8% 46.1%)",
      accent: "hsl(240 4.8% 95.9%)",
      "accent-foreground": "hsl(240 5.9% 10%)",
      destructive: "hsl(0 84.2% 60.2%)",
      "destructive-foreground": "hsl(0 0% 98%)",
      border: "hsl(240 5.9% 90%)",
      input: "hsl(240 5.9% 90%)",
      ring: "hsl(240 5.9% 10%)",
    },
    dark: {
      background: "hsl(240 10% 3.9%)",
      foreground: "hsl(0 0% 98%)",
      card: "hsl(240 10% 3.9%)",
      "card-foreground": "hsl(0 0% 98%)",
      popover: "hsl(240 10% 3.9%)",
      "popover-foreground": "hsl(0 0% 98%)",
      primary: "hsl(0 0% 98%)",
      "primary-foreground": "hsl(240 5.9% 10%)",
      secondary: "hsl(240 3.7% 15.9%)",
      "secondary-foreground": "hsl(0 0% 98%)",
      muted: "hsl(240 3.7% 15.9%)",
      "muted-foreground": "hsl(240 5% 64.9%)",
      accent: "hsl(240 3.7% 15.9%)",
      "accent-foreground": "hsl(0 0% 98%)",
      destructive: "hsl(0 62.8% 30.6%)",
      "destructive-foreground": "hsl(0 0% 98%)",
      border: "hsl(240 3.7% 15.9%)",
      input: "hsl(240 3.7% 15.9%)",
      ring: "hsl(240 4.9% 83.9%)",
    },
  },

  // Typography system
  typography: {
    fontFamily: {
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "monospace"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
    },
  },

  // Spacing system
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
    40: "10rem",
    48: "12rem",
    56: "14rem",
    64: "16rem",
  },

  // Border radius system
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },

  // Shadows system
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
  },

  // Animation system
  animation: {
    duration: {
      fast: "150ms",
      normal: "300ms",
      slow: "500ms",
    },
    timing: {
      linear: "linear",
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
    },
  },

  // Breakpoints system
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Z-index system
  zIndex: {
    auto: "auto",
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
  },

  // Component-specific themes
  components: {
    button: {
      base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      variants: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      sizes: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    card: {
      base: "rounded-lg border bg-card text-card-foreground shadow-sm",
    },
    input: {
      base: "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    },
  },
}

// Utility function to merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme provider component type
export type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: "light" | "dark" | "system"
  storageKey?: string
}

// Theme context type
export type ThemeContextType = {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
} 