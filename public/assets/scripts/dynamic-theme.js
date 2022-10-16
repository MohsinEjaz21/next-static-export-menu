// console.clear();

import {
  nearest,
  converter,
  differenceEuclidean,
  formatHex
} from "https://cdn.skypack.dev/culori@2.0.0";

function adjustHue(val) {
  if (val < 0) val += Math.ceil(-val / 360) * 360;

  return val % 360;
}

function createScientificPalettes(baseColor) {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210]
  };

  const palettes = {};

  for (const type of Object.keys(targetHueSteps)) {
    palettes[type] = targetHueSteps[type].map((step) => ({
      mode: "lch",
      l: baseColor.l,
      c: baseColor.c,
      h: adjustHue(baseColor.h + step)
    }));
  }

  return palettes;
}

function generate() {
  // choose a random base color
  const base = {
    l: 50 + Math.random() * 10,
    c: 60 + Math.random() * 10,
    h: Math.random() * 360,
    mode: "lch"
  };

  // generate "classic" color palettes
  const palettes = createScientificPalettes(base);

  // choose a random palette
  const choice = Object.entries(palettes)[Math.floor(Math.random() * 5)][1];

  // convert palette to HEX
  const paletteHex = choice.map((color) => formatHex(color));

  // take the "base" color, and make a light, desaturated version of it. This will be perfect for background colors, etc.
  const lightest = formatHex({
    ...choice[0],
    l: 98,
    c: 10
  });

  // take the "base" color, and make a dark, desaturated version of it. This will be perfect for text!
  const darkest = formatHex({
    ...choice[0],
    l: 10,
    c: 20
  });

  // set the light / dark custom properties
  document.body.style.setProperty(`--color-light`, lightest);
  document.body.style.setProperty(`--color-dark`, darkest);

  // for each color in the palette, add a custom property with its value
  paletteHex.forEach((color, index) => {
    document.body.style.setProperty(`--color-${index}`, color);
  });
}

// generate();

// setInterval(() => {
//   generate();
// }, 1000);
