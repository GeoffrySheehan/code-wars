// 80's Kids #10: Captain Planet
// https://www.codewars.com/kata/568eeb1ce6f9e820c800000b
/**
 * Parses a global data file into an array of objects containing Country, and toxic substance amounts
 * Example:
 *   ...
 *   ##################################      [..., {
 *   Location: DEU                              Location: 'DEU',
 *   ##################################         Ammonia: 23,
 *   Ammonia: 023 particles              ->     'Nitrogen Oxide': 19
 *   Nitrogen Oxide: 019 particles              'Carbon Monoxide': 127
 *   Carbon Monoxide: 127 particles          }, ...]
 *   ##################################
 *   ...
 * @return {Array.<Object>} Every element represents a country and the amount of toxic substances in it's atmosphere
 */
function normalizeData() {
  return dataFile
  .replace(/(?:^#+\n|\n#+\n$|#+\n )/g,'') // Remove excess separators (first, last, and those between location and particle data)
  .replace(/\n /g, '\n')  // Removes unnecessary whitespace before particle counts
  .split(/\n#+\n#+\n/)    // Splits data by location
  .map(data => {          // Convert data strings into objects
    let obj = {};
    const properties = data.split('\n');
    properties.forEach(property => {
      const [key, val] = property.split(': ');
      obj[key] = parseInt(val) || val;  // Store the value as an int if possible, or a string if not.
    });
    return obj;
  });
}

/**
 * Finds the country or countries that have the most amount of a toxic substance in their atmosphere
 * Example:
 *   [...,
 *     {                            {
 *       Location: 'DEU',              ...
 *       Ammonia: 23,            ->    'Carbon Monoxide': {
 *       'Nitrogen Oxide': 19            max: 127,
 *       'Carbon Monoxide': 127          offenders: [..., 'DEU', ...]
 *   },                                }
 *   ...]                           }
 * @param {Array.<Object>} data - An array of parsed location and substance data from the data file.
 * @return {Object} The locations with the most of a toxic substance in their atmosphere
 */
function findOffenders(data) {
  // Get the particles
  const particles = Object.keys(data[0]).slice(1); // Location is not a particle
  // Create an object to store the maximum value and offenders for each substance
  const maximums = particles.reduce((obj, particle) => {
    obj[particle] = {max: -1, offenders: []};
    return obj;
  }, {});
  // Record the offenders for each substance
  for (const point of data) {
    for (const particle of particles) {
      const max = maximums[particle].max;
      const count = point[particle];
      // A new maximum value has been found
      if (max < count) {
        maximums[particle].max = count;
        maximums[particle].offenders = [point.Location];
      }
      // Someone else has a lot of pollution
      else if (max === count) {
        maximums[particle].offenders.push(point.Location);
      }
    }
  }
  
  return maximums;
}

/**
 * Creates a summary report of toxic substances in the air of offending countries from a global data file.
 * @return {string} A report of all the countries with a high amount of toxic substances in their air.
 */
function parseData() {
  // Parse data from file
  const workingData = normalizeData();
  // Find the offenders for each substance
  const maximums = findOffenders(workingData);
  // Display results
  const output = [];
  for (const particle in maximums) {
    const offenders = maximums[particle].offenders;
    output.push(`${particle} levels in ${offenders.join(', ')} are too high.`)
  }
  
  return output.join(' ');
}
