const { indexOf, atIndex } = require("./operators/accessing");

module.exports = class FunArray {
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

    //add or remove items

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
        this.#Array.unshift(arguments);
    }

    //Accessing elelments

    indexOf(value) {
        return indexOf(this.#Array, value);
    }

    atIndex(index) {
        return atIndex(this.#Array, index);
    }

    //Fun methods

    funPush() {
        for (let i = 0; i < arguments.length; i++) {
            this.#Array.push(arguments[i]);
        }
    }
};
