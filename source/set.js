'use strict';

/**
 * set the property of object.
 * @param {Object} object - the object that will be changed
 * @param {string} pathToField - path to the field to be set. 
 *     If the field doesn't exist, it will be added
 * @param {*} value - value to be set in property
 * @returns {Object|*} returns changed object or value if pathToField is invalid 
 */
const set = (object, pathToField, value) => {
    debugger;
    if (!pathToField) {
        return value;
    }

    if (!(object instanceof Object)) {
        object = {};
    }

    let arrOfFields = pathToField.split('.');

    // Пропуск начальных точек    
    let startIndex = 0;
    while (!arrOfFields[startIndex]) {
        if (startIndex == arrOfFields.length) {
            return value;
        }
        startIndex++;
    }

    let lastField = arrOfFields.pop();

    const reduceImpl = (accumulator, currentValue, index) => {
        if (index < startIndex) {
            return accumulator;
        }
        if (!accumulator.hasOwnProperty(currentValue)) {
            accumulator[currentValue] = {};
        }
        return accumulator[currentValue];
    }

    arrOfFields.reduce(reduceImpl, object)[lastField] = value;

    return object;
}
