const { FunArray } = require("./index");

let arr = new FunArray(
    { _id: 1, name: "Jitiendran" },
    { _id: 2, name: "Jiji" }
);

arr.removeWhere("_id==1");

arr.print();
