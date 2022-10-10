// // ----------------------Type Annotations on Variables----------------------
// let string: string = "string";
// let number: number = 10;
// let boolean: boolean = true;
// let any: any;

// let stringArray: string[] = ["name1", "name2", "name3"];

// // ----------------------Functions----------------------
// // Parameter Type Annotations
// function getUserFullname(name: string, surname: string){
//     return name + surname;
// }

// // Return Type Annotations
// function getUserFullname2(name: string, surname: string) : string{
//     return name + surname;
// }

// //Object Types
// function printSum(obj: {x: number, y: number}){
//     console.log(obj.x + obj.y);
// }
// printSum({x: 1, y:2});


// //----------------------Union Types----------------------
// let idNumber: string | number;
// idNumber = "12345678901";
// idNumber = 12345678901;

// console.log(typeof(idNumber));


// function printValue(value: number | string) {
//     console.log(value);
//     console.log(typeof(value));
// }

// printValue(1);
// printValue("test");
// // printValue(true);


// //----------------------Interfaces----------------------
// interface User {
//     name: string;
//     surname: string;
//     email: string;
// }

// function printUser(user: User){
//     console.log(user.name);
//     console.log(user.surname);
//     console.log(user.email);
// }

// printUser({name: "name", surname: "surname", email: "email@mail.com"});


// //----------------------Enums----------------------
// enum UserStatusEnum {
//     Active = 1,
//     Inactive = 2,
//     Deleted = 3
// }

// enum AdminStatusEnum {
//     Active,
//     Inactive,
//     Deleted
// }

// console.log(UserStatusEnum.Active);
// console.log(AdminStatusEnum.Active);
// console.log(AdminStatusEnum.Deleted);


// //----------------------Classes----------------------
// class Greeter {
//     name: string;
   
//     constructor(name: string) {
//       this.name = name;
//     }
// }

// let newGreeter = new Greeter("name");
// console.log(newGreeter.name);


// class Greeter2 {   
//     constructor(private name: string, public surname: string) {
//       this.name = name;
//     }
// }

// let newGreeter2 = new Greeter2("name", "surname");
// newGreeter2.surname = "newSurname";
// // newGreeter2.name = "newName";
// console.log(newGreeter2);



// //----------------------Property Modifiers----------------------
//   //Optional Properties
// interface User2 {
//     name: string;
//     email?: string;
//     age?: number;
// }

// function printUser2(user: User2){
//     console.log(user.name);
//     console.log(user.age);
// }

// printUser2({name: "name", age: 1});
// printUser2({name: "name", email: "test@mail.com"});

// //readonly Properties
// interface Book {
//     readonly title: string;
//     description: string;
// }

// function getBook(book: Book){
//     console.log(book.title);
//     console.log(book.description);

//     book.description = "new Description";
//     console.log(book.description);

//     // book.title = "new title"
// }

// getBook({title: "title", description: "description"});



// //----------------------Extending Types----------------------
// interface Car{
//     manufacturer: string;
//     model: string;
//     category: string;
// }

// interface CarDetails extends Car{
//     color: string;
//     year: number;
//     price: number;
// }

// let myCar: Car = {
//     manufacturer: "manufacturer",
//     model: "model",
//     category: "category"
// }

// let myCarDetails: CarDetails = {
//     color: "color",
//     year: 2020,
//     price: 10000,

//     manufacturer: "manufacturer",
//     model: "model",
//     category: "category"
// }

// //Intersection Types
// interface Appearence  {
//     hair: string;
//     height: number;
//     weight: number;
// }
// interface Skills {
//     languages: boolean;
//     coding: boolean;
// }
   
// type Person = Appearence & Skills;

// let person: Person = {
//     hair: "red",
//     height: 170,
//     weight: 55,
//     languages: true,
//     coding: true
// }

// console.log(person);


// //----------------------Generics----------------------
// function getNewArray<T>(arg: T[]): T[] {
//     console.log(arg.length);
//     let result = arg.slice(0, 3);
//     return result;
// }

// let stringList = ["a", "b", "c"];
// let numberList = [1, 2, 3, 4, 5, 6, 7];

// let newTest = getNewArray(numberList);

// console.log(newTest);
