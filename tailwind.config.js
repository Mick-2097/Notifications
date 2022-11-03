/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./new.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hex-image":
          "url('https://raw.githubusercontent.com/Mick-2097/Notifications/white-clean-hex/SL-051919-20420-09.jpg')",
      },
    },
  },
  plugins: [],
}
