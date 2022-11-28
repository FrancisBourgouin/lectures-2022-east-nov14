const generateBackgroundColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const cssBackground = `rgb(${red},${green},${blue})`;

  return cssBackground;
};

module.exports = { generateBackgroundColor };
