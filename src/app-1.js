/**
 * Created by Liliang on 2016/9/8.
 */
"use strict"
// for-of  
/**
 * for-in循环用来遍历对象属性。
 * for-of循环用来遍历数据—例如数组中的值。
 * for-of循环也可以遍历其它的集合
 * for-of循环不仅支持数组，还支持大多数类数组对象，例如DOM NodeList对象。
 * for-of循环也支持字符串遍历，它将字符串视为一系列的Unicode字符来进行遍历：
 * for-of循环同样支持Map和Set对象遍历。
 */
// 數組
var myArray = [1,2,3,6,7,9];
for (var value of myArray){
	console.log(value);
}

// 类
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        console.log(this.type + ' says ' + say)
        // setTimeout( () => {
        //     console.log(this.type + ' says ' + say)
        // }, 1000)
    }
}

let animal = new Animal()
animal.says('hello') //animal says hello

// 继承类
class Cat extends Animal {
    constructor(){
        super()
        this.type = 'cat'
    }
}

let cat = new Cat()
cat.says('hello') //cat says hello


function a(i){return i+1} //普通函数
(i)=>i+1;// 箭头函数


// 字符串模板
let va = "cat ";
let temp = `hello ${va}`;
console.log(temp)

// 解构
let ca = 'ken'
let dog = 'lili'
let zoo = {ca, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

