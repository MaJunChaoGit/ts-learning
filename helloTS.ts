function sayHello(person: string) {
  return `Hello,${person}`;
}
let user = 'Tom';
console.log(sayHello(user));

let isDone: boolean = false;

let createdByNewBoolean: Boolean = new Boolean(1);

let flag: boolean = Boolean(1);

let deLiterral: number = 5;

let myName: string = `Ma` + 'junchao';

let eunusable: void = undefined;

let _name: string = 'mjc';

function getLength(something: string): string {
  return something.toString();
}

getLength(_name)

interface Person {
  name: string;
  age?: number;
}

let tom: Person = {
  name: 'Tom',
  age: 123,
}

interface Animal {
  readonly name: string;
}

let bar: Animal = {
  name: 'zz'
}

bar.name = '渣渣';

