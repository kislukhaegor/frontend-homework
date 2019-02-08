'use strict';

const set = (object, pathToField, value) => {
	if (!pathToField) {
		object = value;
		return value;
	}
	if (object === undefined) {
		object = {};
	}

	let arr = pathToField.split('.');
	let last_field = arr.pop();

	// если в строке отсутсвует точка в начале, то начинать нужно с первого элемента массива	
	let start_index = 0;
	if (!arr[0]) {
		start_index = 1;
	}

	const reduce_impl = (accumulator, currentValue, index, arr) => {
		if (index < start_index) {
			return accumulator;
		}
		if (!(currentValue in accumulator)) {
			accumulator[currentValue] = {};
		}
		return accumulator[currentValue];
	}

	arr.reduce(reduce_impl, object)[last_field] = value;

	return object;
}
