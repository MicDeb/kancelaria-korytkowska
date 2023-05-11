/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const defaultTheme = require('tailwindcss/defaultTheme');
const colorsPalette = require('./src/styles/colorsPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      header: ['Playfair Display', 'serif']
    },
    colors: {
      primary: colorsPalette.primary,
      background: {
        gray: colorsPalette.background_gray,
        grayLight: colorsPalette.gray_light,
      },
      text: {
        header: colorsPalette.header,
        label: colorsPalette.label,
      },
      white: colorsPalette.white,
      transparent: colorsPalette.transparent
    }
  },
  plugins: [],
}

