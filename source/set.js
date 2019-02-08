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
	let tmp = object;

	// если в строке отсутсвует точка в начале, то начинать нужно с первого элемента массива	
	let i = 0;
	if (!arr[0]) {
		i = 1;
	}
	for (; i < arr.length - 1; ++i) {
		if (!(arr[i] in tmp)) {
			tmp[arr[i]] = {};
		}
		tmp = tmp[arr[i]];
	}
	tmp[arr[arr.length - 1]] = value;
	return object;
}
