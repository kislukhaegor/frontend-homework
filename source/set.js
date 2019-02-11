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

    let startIndex = arrOfFields.findIndex((element) => {
        if (element.valueOf() == "") {
            return false;
        }
        return true;
    });

    if (startIndex == -1) {
        return value;
    }

    // Пропуск начальных точек    
    arrOfFields = arrOfFields.splice(startIndex, arrOfFields.length - startIndex);

    let lastField = arrOfFields.pop();

    // случай, когда в конце стоят точки
    while (lastField.valueOf() == "") {
        lastField = arrOfFields.pop();
    }

    const reduceImpl = (accumulator, currentValue, index) => {
        if (currentValue.valueOf() == "") {
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
