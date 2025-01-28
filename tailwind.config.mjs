/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        'xs-': '0.6875rem', // 11px (xs보다 작음)
        'sm+': '0.875rem', // 14px (sm와 base 사이)
        'base+': '0.9375rem', // 15px (sm와 base 사이)
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
