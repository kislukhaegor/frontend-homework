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
    if ((typeof(pathToField)).valueOf() != "string" && !(pathToField instanceof String) ) {
        return value;
    }

    if (!(object instanceof Object)) {
        object = {};
    }

    let arrOfFields = pathToField.split('.');

    // assignment to last field last signficant field
    let lastField = arrOfFields.pop();
    while (lastField === "") {
        lastField = arrOfFields.pop();
    }

    // process empty path
    if (lastField === undefined) {
        return value
    }

    const reduceImpl = (accumulator, currentValue, index) => {
        if (currentValue === "") {
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
