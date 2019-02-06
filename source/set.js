'use strict'

const set = (object, pathToField, value) => {
	let impl = (object, arr, value) => {
		if (!arr.length) {
			return;
		}
		if (arr.length == 1) {
			object[arr[0]] = value;
			return;
		}
		let key = arr.pop();
		if (!(key in object)) {
			object[key] = {};
		}
		return impl(object[key], arr, value);
	}
	if (!pathToField) {
		object = value;
		return value;
	}
	let arr = pathToField.split('.').reverse();
	if (!arr[arr.length - 1]) {
		arr.pop();
	}
	impl(object, arr, value);
	return object
}