module.exports = function reverse (n) {
  let strNumber = n.toString()
  let reversedStr = strNumber.split('').reverse().join('')
  return parseInt(reversedStr)
}
