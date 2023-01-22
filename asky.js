//-- asky js | version: beta | MIT LICENSE
const askyV = 'BETA';
const askyTheme = 0; // 0 = dark, 1 = light 2 = system default.


// Get the root element
var cssRoot = document.querySelector(':root');

function askySetDarkTheme() {
    var rs = getComputedStyle(cssRoot);
    alert(`The value of --body-background is: ${rs.getPropertyValue('--body-background')}`);
}

function askySetLightTheme() {
    var rs = getComputedStyle(cssRoot);
    alert(`Setting light theme.`);
    cssRoot.style.setProperty('--body-background', '#fff');
}



// // Create a function for setting a variable value
// function myFunction_set() {
//   // Set the value of variable --blue to another value (in this case "lightblue")
//   r.style.setProperty('--blue', 'lightblue');
// }

window.onload = function () {
    var htmlTitle = document.title;
    document.title = `${htmlTitle} | Developed with asky.css`;
    console.log(`asky.css v${askyV}`);
}