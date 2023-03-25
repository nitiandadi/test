class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
let zhaofaji=new Person('zhaofaji', 18);
zhaofaji.sayHello();