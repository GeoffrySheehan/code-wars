// Over The Road
// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07
function overTheRoad(address, n) {
	// Setup formulas to describe the street layout

	// Given an x: index, find the house number across the street
	const across = {
		0: (index) => 2 * index + 1,
		1: (index, n) => 2 * (n - index),
	};

	// Given a y: address, find the corresponding x: index
	const inverse = {
		0: (address, n) => n - address / 2,
		1: (address) => (address - 1) / 2,
	};

	// get the parity of the number to access correct functions
	const key = address % 2;

	// Find the index of this address, the house across the street will have the same index
	const index = inverse[key](address, n);
	return across[key](index, n);
}
