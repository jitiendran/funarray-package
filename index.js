const { indexOf, atIndex } = require("./src/operators/accessing");
const { removeWhere, findWhere } = require("./src/operators/fun");

module.exports.FunArray = class FunArray {
    #Array = [];

    constructor() {
        const args = arguments;
        for (let i = 0; i < args.length; i++) {
            this.#Array.push(args[i]);
        }
    }

    //Basic

    print() {
        console.log(this.#Array);
    }

    length() {
        return this.#Array.length;
    }

    array() {
        return this.#Array;
    }

    //Add or Remove items

    push(value) {
        this.#Array.push(value);
    }

    trash() {
        this.#Array.length = [];
    }

    pop() {
        this.#Array.pop();
    }

    shift() {
        this.#Array.shift();
    }

    unshift() {
        for (let i = 0; i < arguments.length; i++) {
            this.#Array.unshift(arguments[i]);
        }
    }

    toString() {
        return this.#Array.toString();
    }

    fill(value, start, end) {
        const arr = this.#Array;
        if (arguments.length === 1) return arr.fill(value);
        else if (arguments.length === 3) return arr.fill(value, start, end);
    }

    //Accessing elelments

    indexOf(value) {
        return Number(indexOf(this.#Array, value));
    }

    atIndex(index) {
        return atIndex(this.#Array, index);
    }

    //Modifying Elements

    removeAt(index) {
        this.#Array.splice(index, 1);
    }

    remove(value) {
        const index = this.#Array.indexOf(value);
        this.#Array.splice(index, 1);
    }

    merge(obj) {
        this.#Array = [...this.#Array, ...obj.#Array];
    }

    distinct() {
        return [...new Set(this.#Array)];
    }

    slice(start, end) {
        let arr = [];
        arr = this.#Array.slice(start, end);
        return arr;
    }

    //Object Array removing

    removeWhere(expression) {
        removeWhere(this.#Array, expression);
    }

    findWhere(expression) {
        return findWhere(this.#Array, expression);
    }

    //Sorting

    sortAsc(key) {
        if (arguments.length === 0) {
            return this.#Array.sort();
        } else if (arguments.length === 1) {
            return this.#Array.sort((a, b) => {
                return a[key] - b[key];
            });
        }
    }

    sortDesc(key) {
        if (arguments.length === 0) {
            return this.#Array.sort((a, b) => {
                return b - a;
            });
        } else if (arguments.length === 1) {
            return this.#Array.sort((a, b) => {
                return b[key] - a[key];
            });
        }
    }

    //Fun methods

    replace(Old, New, occurence) {
        let count = 0;
        if (arguments.length == 2) {
            for (let i = 0; i < this.#Array.length; i++) {
                if (this.#Array[i] === Old) {
                    this.#Array[i] = New;
                    break;
                }
            }
        } else if (arguments.length == 3) {
            for (let i = 0; i < this.#Array.length; i++) {
                if (count === occurence) break;

                if (this.#Array[i] === Old) {
                    this.#Array[i] = New;
                    count++;
                }
            }
        } else {
            throw new Error(" Too many number of arguments");
        }
    }

    replaceAll(Old, New) {
        if (arguments.length == 2) {
            for (let i = 0; i < this.#Array.length; i++) {
                if (this.#Array[i] === Old) {
                    this.#Array[i] = New;
                }
            }
        } else {
            throw new Error(" Too many number of arguments");
        }
    }

    funPush() {
        for (let i = 0; i < arguments.length; i++) {
            this.#Array.push(arguments[i]);
        }
    }

    findAndUpdate(index, value) {
        this.#Array[index] = value;
    }
};
