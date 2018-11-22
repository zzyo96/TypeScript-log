// *****1.********
function sayHello(person: string) {
  return 'Hello' + person
}
let user = 'Tom'
console.log(sayHello(user));

// ******2.void
function alertName(): void {
  console.log('my name is tom')
}
alertName()

// ***3.****
let num: number = undefined //不报错

// let u: void;
// let num1: number = u;  //报错

// ****4.any 任意值*****
let num2: any = 'seven'
num2 = 3

//  ****在任意值上访问任何属性或者调用任何方法都是合法的
let anything: any = 'hello'
console.log(anything.name)
console.log(anything.age)

// ****5.类型推论*******
// let abc = 'abc'
// abc = 1   //报错
// // 等价于
// let abc: string = 'abc';
// abc = 1

// ******6.联合类型****
let com: string | number | boolean
com = 'seven'
com = 7
com = false

// ****7.对象的类型--接口****
interface Person {
  name: string;
  age: number;
}

let jack: Person = {
  name: 'jack',
  age: 25
}
console.log(jack.name)