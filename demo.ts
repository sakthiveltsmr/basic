export {};

// variable declaration

let x = 10;
const y = 20;

const title = "type script learning";

//variable datatype

const name: string = "sakthivel";

const age: Number = 24;

const employe: boolean = true;

const sentence: string = `my name is ${name},and my age is ${age}`;

console.log(sentence);

let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];
//tuples
let person1: [string, number] = ["sakthi", 24];

//enum

enum color {
  red = 5,
  green,
  blue,
}

let c: color = color.blue;
console.log(c);

//unknown type

let myvariable: unknown = 10;

myvariable = "sakthi";

// console.log(myvariable);
function hashName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}

if (hashName(myvariable)) {
  console.log(myvariable.name);
}

(myvariable as string).toUpperCase();
