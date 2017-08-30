
// Converts Hexadecimals to Integers base 10. This is to convert a hex color to RGB format.
function hextoRGBA(hex) {
  if(hex.substring(0,1) === '#') hex = hex.substring(1)
  const hexLength = hex.length
  if (hexLength !== 3 && hexLength !== 6) return false
  if (hexLength === 3) console.log(hex.split('').reduce((array, value) => {
    array.concat('helo')
    console.log(array)
    return array
  }))
  return [parseInt(hex.substring(0, d),16), parseInt(hex.substring(d, d + 1*d), 16), parseInt(hex.substring(d + 1*d, d + 2*d), 16)];
}

console.log(hextoRGBA('fff'))
