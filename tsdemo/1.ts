//*****1.枚举********
// enum Gender {
//   Man = 'man', //man是Man的值如果不写默认是0
//   Woman = 'woman' //不写默认是1
// }

// let gender: Gender = Gender.Man
// console.log(gender)  //打印出man

// *****2.void*****
// function print(x: any): void{ //意思是参数可以是任意类型的，并且没有返回值
//   console.log(x);
// }

//**** 3.断言-主观保证********
// let a: any = '123';

// console.log((<string>a).split(''));
// console.log((a as string).split(''));   //与上面相等

// *****4.数据类型转换*****
// let name = `{"name":"frank","age":"15"}`;
// let name2 = JSON.parse(name)

// *******5.interface就是描述一个东西必须有那些属性*********
interface Shape {
  head: string;
  body: string;
}
interface Human {
  name: string;
  age: number;
  shape: Shape;
  say(word: string): void;
}
let frank: Human = {
  name: 'frank',
  age: 18,
  shape: { head: '头', body: '身体' },
  say(word: string) {
    console.log(word)
  }
}
frank.say('hello')
console.log(frank)