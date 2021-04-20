// Array Helpers
// https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.power = function(power) { return this.map(value => value ** power) }

Array.prototype.square = function() { return this.power(2) }

Array.prototype.cube = function() { return this.power(3) }

Array.prototype.sum = function() { return this.reduce((sum, value) => sum + value, 0) }

Array.prototype.average = function() { return this.sum() / this.length }

Array.prototype.even = function() { return this.filter(value => !(value % 2)) }

Array.prototype.odd = function() { return this.filter(value => value % 2) }
