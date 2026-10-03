const themeToggle = document.getElementById('theme-toggle');
const themeToggleSvg = themeToggle.querySelector('svg');
const windowViewObject = document.getElementById('window-view');
const lampsObject = document.getElementById('lamps');

function toggleDarkTheme(elm) {
  elm.classList.toggle('dark');
}

function objectDarkThemeToggle(obj) {
  const svgElement = obj.contentDocument.querySelector('svg');
  if (!svgElement) {
    obj.addEventListener('load', () => objectDarkThemeToggle(obj));
  } else {
    toggleDarkTheme(svgElement);
  }
}

function themeToggleHandler() {
  const pressState = themeToggle.ariaPressed;
  themeToggle.ariaPressed = pressState === 'false';

  objectDarkThemeToggle(windowViewObject);
  objectDarkThemeToggle(lampsObject);
  toggleDarkTheme(themeToggleSvg);
  toggleDarkTheme(document.documentElement);
}

themeToggle.addEventListener('click', themeToggleHandler);
