"use strict";
exports.__esModule = true;
// variable declaration
var x = 10;
var y = 20;
var title = "type script learning";
//variable datatype
var name = "sakthivel";
var age = 24;
var employe = true;
var sentence = "my name is ".concat(name, ",and my age is ").concat(age);
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuples
var person1 = ["sakthi", 24];
//enum
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
var c = color.blue;
console.log(c);
//unknown type
var myvariable = 10;
myvariable = "sakthi";
// console.log(myvariable);
function hashName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hashName(myvariable)) {
    console.log(myvariable.name);
}
myvariable.toUpperCase();
//multitype
var multi;
multi = 22;
multi = true;
console.log(multi);
// anyType
var anyType;
anyType = 44;
anyType = true;
anyType = "sakthi";
