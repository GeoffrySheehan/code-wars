// Correct the time-string
// https://www.codewars.com/kata/57873ab5e55533a2890000c7
// Returns the quotient and product of modulus 
function divmod(value, divisor) {
  return [Math.floor(value / divisor), value % divisor]
}

function timeCorrect(timestring) {
  // Handle empty strings
  if (timestring === '') return ''
  
  // Handle properly formed strings
  if (timestring && timestring.match(/\d{2}:\d{2}:\d{2}/g)) {
    // split into [hours, minutes, seconds]
    let time = timestring.split(':')
    for (let i = time.length-1; i >= 0; i--) {
      // Divmod hours by 24, minutes and seconds by 60
      let [carry, corrected] = divmod(time[i], i ? 60 : 24)
      // convert numbers back to strings and zero pad when appropriate
      time[i] = ('0' + corrected).slice(-2)
      
      // add any carryover to the next component of the time
      // Hours past 24 are discarded
      if (carry && i) {
        time[i-1] = +time[i-1] + carry
      }
    }
    // join the string and return
    return time.join(':')
  }
  
  // Null, and improperly formatted strings return null here
  return null;
}
