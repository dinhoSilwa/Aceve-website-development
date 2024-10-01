import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobileMicro: "375px",
        mobileMini: "412px",
        mobileSmall: "480px",
        mobileLarger: "536px",
        mobileXLarger: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        desktopLarge: "1440px",
        desktopXLarge: "1920px",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        purple: {
          medium: "#230157",
          haiti: "#130327",
          light: "#482E98",
        },
        white: {
          normal: "#FFF",
          smooth: "#FEFCFB",
        },
        yellow: {
          normal: "#EEAA44",
        },
        gray: {
          normal: "#444444",
          stroker: "#999999",
        },
        beige: {
          normal: "#FDF7ED ",
        },
        preto: {
          normal: "#000000",
          bunker: "#14171A",
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      lineClamp: {
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".no-scrollbar": {
          "scrollbar-width": "none" /* Para Firefox */,
          "-ms-overflow-style": "none" /* Para IE e Edge */,
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none" /* Para Chrome, Safari, etc. */,
        },
      });
    },

    function ({ addUtilities }: any) {
      addUtilities({
        ".line-clamp-3": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "3",
        },
        ".line-clamp-4": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "4",
        },
        ".line-clamp-5": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "5",
        },
        ".line-clamp-6": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "6",
        },
        ".line-clamp-7": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "7",
        },
        ".line-clamp-8": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "8",
        },
        ".line-clamp-9": {
          display: "-webkit-box",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
          "-webkit-line-clamp": "9",
        },
      });
    },
  ],
};
export default config;
