function stringy(size) {
  let output = ''
  for(let i = 0; i < size / 2; i++) {
    output += '10'
  }
  return output.slice(0, size)
}
