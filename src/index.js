const { indexOf, atIndex } = require("./operators/accessing");
const { removeWhere } = require("./operators/fun");
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

    //Add or Remove items

    push(value) {
        this.#Array.push(value);
    }

    trash() {
        this.#Array.length = 0;
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

    //Accessing elelments

    indexOf(value) {
        return indexOf(this.#Array, value);
    }

    atIndex(index) {
        if (typeof index === number) {
            return atIndex(this.#Array, index);
        }
        return new Error("Incorrect datatype for index");
    }

    //Removing Elements

    removeAt(index) {
        if (typeof index === number) {
            this.#Array.splice(index, 1);
        } else {
            throw new Error("Incorrect datatype for index");
        }
    }

    remove(value) {
        const index = this.#Array.indexOf(value);
        this.#Array.splice(index, 1);
    }

    //Object Array removing

    removeWhere(expression) {
        removeWhere(this.#Array, expression);
    }

    //Fun methods

    funPush() {
        for (let i = 0; i < arguments.length; i++) {
            this.#Array.push(arguments[i]);
        }
    }

    findAndUpdate(index, value) {
        this.#Array[index] = value;
    }
};
