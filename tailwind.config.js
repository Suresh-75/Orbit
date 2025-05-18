/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        typewriter: "typewriter 2s steps(44) 1s forwards",
        "typewriter-cursor": "typewriter-cursor 0.75s step-end infinite",
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        typewriter: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "typewriter-cursor": {
          from: { borderColor: "transparent" },
          to: { borderColor: "currentColor" },
        },
      },
      textGradient: {
        "to-r": {
          backgroundClip: "text",
          color: "transparent",
        },
      },
    },
  },
  plugins: [],
};
