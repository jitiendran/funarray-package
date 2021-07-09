const compOperators = [">", "<", "===", "==", "!==", "!="];

const findOperator = (value) => {
    for (let i = 0; i < compOperators.length; i++) {
        if (value.includes(compOperators[i])) {
            return compOperators[i];
        }
    }
    return new Error("Incompatible Expression");
};

const performOperation = (key, operator, value) => {
    value = value.trim();
    if (isNaN(value)) {
        if (operator === "<") {
            return String(key) < String(value);
        } else if (operator === ">") {
            return String(key) > String(value);
        } else if (operator === "===") {
            return String(key) === String(value);
        } else if (operator === "==") {
            return String(key) == String(value);
        } else if (operator === "!=") {
            return String(key) != String(value);
        } else if (operator === "!==") {
            return String(key) !== String(value);
        }
    } else {
        if (operator === "<") {
            return key < Number(value);
        } else if (operator === ">") {
            return key > Number(value);
        } else if (operator === "===") {
            return key === Number(value);
        } else if (operator === "==") {
            return key == Number(value);
        } else if (operator === "!=") {
            return key != Number(value);
        } else if (operator === "!==") {
            return key !== Number(value);
        }
    }

    return new Error("Incompatible Expression");
};

module.exports.removeWhere = (array, expression) => {
    const exp = String(expression).trim();
    const operator = findOperator(exp);
    const arr = exp.split(operator);

    const key = arr[0].trim();
    const value = arr[arr.length - 1];

    let index = null;

    for (let i = 0; i < array.length; i++) {
        if (performOperation(array[i][key], operator, value)) {
            index = i;
            break;
        }
    }

    array.splice(index, 1);
};

module.exports.findWhere = (array, expression) => {
    const exp = String(expression).trim();
    const operator = findOperator(exp);
    const arr = exp.split(operator);

    const key = arr[0].trim();
    const value = arr[arr.length - 1];

    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (performOperation(array[i][key], operator, value)) {
            result.push(array[i]);
        }
    }
    return result;
};
