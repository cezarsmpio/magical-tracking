/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.ts"],
  theme: {
    extend: {
      keyframes: {
        "bounce-gravity-1": {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "40%": { transform: "translateY(-30px)", opacity: 1 },
          "100%": {
            transform: "translateY(60px) rotate(20deg) skew(10deg)",
            opacity: 0,
          },
        },
        "bounce-gravity-2": {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "10%": { transform: "translateY(-40px)", opacity: 1 },
          "100%": {
            transform: "translateY(80px) rotate(20deg) skew(-15deg)",
            opacity: 0,
          },
        },
        "bounce-gravity-3": {
          "0%": { transform: "translateY(0)", opacity: 0 },
          "20%": { transform: "translateY(-50px)", opacity: 1 },
          "100%": {
            transform: "translateY(100px) rotate(20deg) skew(30deg)",
            opacity: 0,
          },
        },
        "fade-out": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        "bounce-gravity-1": "bounce-gravity-1 1s backwards",
        "bounce-gravity-2": "bounce-gravity-2 1s backwards",
        "bounce-gravity-3": "bounce-gravity-3 1s backwards",
        "fade-out": "fade-out 2s",
      },
    },
  },
  plugins: [],
};
