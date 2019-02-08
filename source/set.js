'use strict';

const set = (object, pathToField, value) => {
	if (!pathToField) {
		return value;
	}

	if (object === undefined) {
		object = {};
	}

	let arr_of_fields = pathToField.split('.');
	let last_field = arr_of_fields.pop();

	// если в строке отсутсвует точка в начале, то начинать нужно с первого элемента массива	
	let start_index = 0;
	if (!arr_of_fields[0]) {
		start_index = 1;
	}

	const reduce_impl = (accumulator, currentValue, index, arr) => {
		if (index < start_index) {
			return accumulator;
		}
		if (!accumulator.hasOwnProperty(currentValue)) {
			accumulator[currentValue] = {};
		}
		return accumulator[currentValue];
	}

	arr_of_fields.reduce(reduce_impl, object)[last_field] = value;

	return object;
}
