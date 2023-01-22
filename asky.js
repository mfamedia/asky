//-- asky js | version: beta | MIT LICENSE
const askyV = 'BETA';
const askyTheme = 0; // 0 = dark, 1 = light 2 = system default.



window.onload = function () {
    var htmlTitle = document.title;
    document.title = `${htmlTitle} | Developed with asky.css`;
    
    console.log(`asky.css v${askyV}`);
}