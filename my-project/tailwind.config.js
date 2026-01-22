export default {
  content: ["./index.html", "./src/**/*.{html,js}"],

  safelist: [
    "animate-fade-up",
  ],

  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 1s ease-out 0.3s both",
      },
    },
  },
  plugins: [],
}
