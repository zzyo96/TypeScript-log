// 1.***对象的类型-接口-可选属性
interface Man {
  name: string;
  age?: number;
}

let tom: Man = {
  name: 'tom'
}
// *****2.任意属性
interface Woman {
  name: string;
  age?: number;
  [propName: string]: any;
}
let amy: Woman = {
  name: 'amy',
  gender: 'female'
}

// *****3.只读属性****
interface Person1 {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom1: Person1 = {
  name: 'Tom',
  gender: 'male',
  id: 123
};
// ****4.数组的类型****
let aaa: number[] = [1, 1, 2, 3, 4]

// *****5.数组泛型*****
let fan: Array<number> = [1, 2, 3, 5, 6, 4]

// ****6.用接口表示数组**** 
interface aaa {
  [index: number]:string
}

let kou:aaa=['好','好']
console.log(kou)

interface NumberArray {
  [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// ****7.any数组用法******
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];