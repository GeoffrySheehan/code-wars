// Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7
/**
 * Converts a non-negative number of seconds to a human readable string
 * Examples:
 *        0 => 00:00:00 <- Min value
 *        5 => 00:00:05
 *       60 => 00:01:00
 *    86399 => 23:59:59
 *   359999 => 99:59:59 <- Max value
 * @param {number} seconds - Number of seconds to convert to a string
 * @return {string} A time string in the format HH:MM:SS
 */
function humanReadable(seconds) {
  // Get hours
  // Get minutes
  // Get seconds
  // 0-pad time components
  // Join components
  const hrs = String(~~(seconds / 3600)).padStart(2, '0');
  seconds = seconds % 3600;
  const mins = String(~~(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}
