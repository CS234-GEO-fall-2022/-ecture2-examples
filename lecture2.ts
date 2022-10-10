let title: string = "Name";
let number: number = 1;
let boolean: boolean = true;
let any: any = "Name";
let array: string[] = ["test", "a"];

//---------------
function getName(name: string | number | boolean) : string | number | boolean{
    // console.log(name);
    return name;
    // if(typeof(name) == "string"){
    //     return name;
    // }
    // else{
    //     return " ";
    // }
}

let newName = getName("Ann");
console.log(newName);
//---------------

interface User{
    name: string;
    surname: string;
    email: string;
    age: number
}

let newUser: User = {
    name: "name",
    surname: "surname",
    email: "mail@mail.com",
    age: 20
}

class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class Person2{
    constructor(public name: string, private age: number){
    }
}

let newPerson: Person2 = new Person2("Ann", 30);
console.log(newPerson.name);
// console.log(newPerson.age);
//---------------


interface Car{
    model?: string;
    readonly type: string;
}

interface CarDetails extends Car{
    price: number;
    color: string;
}

let newCar: CarDetails = {
    price: 10000,
    model: "model",
    color: "red",
    type: "type"
}

newCar.color = "black";
// newCar.type = "newType";
console.log(newCar.model);

type CarDetails2 = Car & CarDetails;
let newCar2: CarDetails2 = {
    price: 10000,
    model: "model",
    color: "red",
    type: "type"
}

//---------------

enum UserStatusEnum{
    Active = 1,
    Deactivated = 2,
    Delated = 3
}

enum UserTypeEnum{
    Student,
    lecturer
}

interface User2{
    name: string;
    status: number
}

let newUser2: User2 = { 
    name: "name",
    status: 1
}

function getUserName(user: User2){
    if(newUser2.status == UserStatusEnum.Active){
        console.log("User is Active");
    }
    else if(newUser2.status == UserStatusEnum.Deactivated){
        console.log("User is Deactivated");
    }
}

getUserName({name: "Ann", status: 1});
console.log(UserStatusEnum.Active);
//---------------




function getNewArray<T>(arg: T[]): T[] {
    console.log(arg.length);
    let result = arg.slice(0, 3);
    return result;
}

let stringList = ["a", "b", "c"];
let numberList = [1, 2, 3, 4, 5, 6, 7];

let newTest = getNewArray(numberList);

console.log(newTest);



