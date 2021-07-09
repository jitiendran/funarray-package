# funarray-package

This is the light weight array package with fun array manipulations and methods.

## Get Started

```
npm install --save @jitiendran/funarray
```

Or if you're not into package management, just [download a ZIP](https://github.com/jitiendran/funarray-package/archive/master.zip) file.

## Setup

After installing the package first the require the package from node modules into your javasctript file

```js
const { FunArray } = require("@jitiendran/funarray");
```

> Now, you can create a empty array by creating a object for the class FunArray.

```js
let array = new FunArray();
```

> You can also add element to array array while creating itself by doing the below.

```js
let array = new FunArray(1, 2, 3, 4);
```

## Common Operations

### 1. Create an Array

```js
let fruits = new FunArray("Apple", "Bannana", "Orange");
```

<div align=center>Or</div>

```js
let fruits = new FunArray();

fruits.push("Apple");
fruits.push("Bannana");
```

### 2. Access an Array elements

```js
let fruit = fruits.atIndex(0); //returns value
```

<div align=center>Or</div>

```js
const index = fruits.indexOf('Apple') //returns index

let fruit = fruits[index]
```

### 3. Looping through array

```js
for (let i = 0; i < fruits.length(); i++) {
    console.log(fruits.atIndex(i));
}
```

Output

```
Apple
Bannana
Orange
```

### 4. Removing an item from last

```js
fruits.pop(); //removes last item

console.log(fruits.array()); //converts funarray to array
```

Output

```
[ 'Apple', 'Bannana' ]
```

### 5. Remove an item from the beginning of an Array

```js
fruits.shift(); //removes Apple from front
```

### 6. Add an item to the beginning of an Array

```js
fruits.unshift("Strawberry");

//output: ['Strawberry','Bannana','Orange']
```

<div align="center">Or</div>

```js
fruits.unshift('Strawberry','PineApple',...)
```

### 7. Remove an item by index position

```js
fruits.removeAt(0); //removes the elements at index 0
```

### 8. Remove an item by value

```js
fruits.remove("Apple"); //removes apple
```

### 9. Copy an array

```js
let copy = fruits.slice();
```

### 10. Print fun array

```js
fruits.print(); //prints the array
```

### 11. Convert Array to String

```js
const str = fruits.toString();
```

### 12. Empty the whole array

```js
fruits.trash();
```

### 13. Fill the array

```js
fruits.fill("Avacado"); //fills everything with Avacado
```

<div align='center'>Or</div>

```js
fruits.fill("Avacado", 0, 1); //fills Avacado starting from index 0 upto 1
```

### 14. Merge with another array

```js
let vegetables = new FunArray("Tomato", "Onion", "Brinjal");

fruits.merge(vegetables);

fruits.print();
```

Output

```
[ 'Apple', 'Bannana', 'Orange', 'Vegetables', 'Onion', 'Brinjal' ]
```

### 15. Make the Array distinct

```js
let num = new FunArray(1, 2, 3, 3).distinct(); //returns normal array

console.log(num);
//output [1,2,3]
```

### 16. Remove the element from Object array using expression

```js
let users = new FunArray(
    {
        _id: 1,
        Username: "Albert",
    },
    { _id: 2, Username: "Jason" }
);

users.removeWhere("_id === 1"); //expression should be string
console.log(users.array());
```

Output

```
[ { _id: 2, Username: 'Jason' } ]
```

### 17. Find the elements from Object array using expression

```js
let users = new FunArray(
    {
        _id: 1,
        Username: "Albert",
    },
    { _id: 2, Username: "Albert" },
    { _id: 3, Username: "Jason" }
);

let foundUsers = users.findWhere("Username === Albert"); //returns normal array

console.log(foundUsers);
```

Output

```
[ { _id: 1, Username: 'Albert' }, { _id: 2, Username: 'Albert' } ]
```

### 18. Sort the Array in ascending Order

```js
const num = new FunArray(4, 2, 3, 3);

let users = new FunArray(
    {
        _id: 2,
        Username: "Albert",
    },
    { _id: 1, Username: "Albert" },
    { _id: 3, Username: "Jason" }
);

num.sortAsc();

users.sortAsc("_id"); //sort by any key;

num.print();
users.print();
```

Output

```
[ 2, 3, 3, 4 ]
[
  { _id: 1, Username: 'Albert' },
  { _id: 2, Username: 'Albert' },
  { _id: 3, Username: 'Jason' }
]
```

### 19. Sort the Array in des
cending Order

```js
const num = new FunArray(4, 2, 3, 3);

let users = new FunArray(
    {
        _id: 2,
        Username: "Albert",
    },
    { _id: 1, Username: "Albert" },
    { _id: 3, Username: "Jason" }
);

num.sortDesc();

users.sortDesc("_id"); //sort by any key;

num.print();
users.print();
```

Output

```
[ 4, 3, 3, 2 ]
[
  { _id: 3, Username: 'Jason' },
  { _id: 2, Username: 'Albert' },
  { _id: 1, Username: 'Albert' }
]
```

### 20. Replace a item in the array

```js
const names = new FunArray("Albert", "Albert", "Jason");

names.replace("Albert", "Happy"); // By default occurence is 1

console.log(names.array());

names.replace("Albert", "Happy", 2); //specifying occurence

console.log(names.array());
```

Output

```
[ 'Happy', 'Albert', 'Jason' ]
[ 'Happy', 'Happy', 'Jason' ]
```

### 21. Replace All elements in the array

```js
const names = new FunArray("Albert", "Albert", "Jason");

names.replaceAll("Albert", "Happy");
```

Output

```
[ 'Happy', 'Happy', 'Jason' ]
```

### 22. Multiple push similar to creation

```js
const names = new FunArray("Albert", "Albert", "Jason");

names.funPush("James", "Elric", "Alphonse");

names.print();
```

Output

```
[ 'Albert', 'Albert', 'Jason', 'James', 'Elric', 'Alphonse' ]
```

### 23. Find and Update the elements in array

```js
const names = new FunArray("Albert", "Albert", "Jason");

names.findAndUpdate(0, "Alphonse");

names.print();
```

Ouput

```
[ 'Alphonse', 'Albert', 'Jason' ]
```
