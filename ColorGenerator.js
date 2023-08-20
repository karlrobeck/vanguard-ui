const rgbToHex = ({r, g, b}) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
}).join('')
function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}
 function colorShades({r,g,b}){
    let shades = []
    let max = Math.max(Math.max(r, Math.max(g,b)), 1);

    let step = 255 / (max * 10)

    for(let i = 1 ; i <= 10 ; i++){
        shades.push({
            r:Math.ceil((r * step * i)),
            g:Math.ceil((g * step * i)),
            b:Math.ceil((b * step * i)),
        })
    }
    return shades.map((color) => rgbToHex(color)).reverse()
}

console.log({
    colors:{
        "primary":'#0d6efd',
        "primary-subtle":colorShades(hexToRgb('#0d6efd'))[8],
        "secondary":'#adb5bd',
        "secondary-subtle":colorShades(hexToRgb('#adb5bd'))[8],
        'light':'#ffff',
        "dark":'#0000',
    },
    textColor:{
        "primary-emphasis":colorShades(hexToRgb('#0d6efd'))[1],
        "secondary-emphasis":colorShades(hexToRgb('#adb5bd'))[1],
    },
    borderColor:{
        "primary-border-subtle":colorShades(hexToRgb('#0d6efd'))[4],
        "secondary-border-subtle":colorShades(hexToRgb('#adb5bd'))[4],
    }
})