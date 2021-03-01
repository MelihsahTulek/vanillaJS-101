// var arr_1 = [1, 2, 3, 4, 5];
// console.log(arr_1.indexOf(3));

//

// let user_1 = {
//   name: "melih",
//   age: 21,
// };

// for (const key in user_1) {
//   if (Object.hasOwnProperty.call(user_1, key)) {
//     console.log(key, user_1[key]);
//   }
// }

//

// let user_1 = {
//   name: "Melihşah",
//   age: 21,
// };

// let jsonObj = JSON.stringify(user_1);

// console.log("JSON STRING", jsonObj);

// console.log("JSON STRING TO JS OBJECT", JSON.parse(jsonObj));

// let data = null;

// const reqToServer = (writeData) => {
//   setTimeout(() => {
//     data = {
//       name: "Melihşah",
//       age: 21,
//     };
//     writeData();
//   }, 2000);
// };

// const writeData = () => {
//   console.log(data);
// };

// reqToServer(writeData);

// const isimYaz = () => console.log("object");

// isimYaz();

// const getAverage = (...numbers) => {
//   let total = null;
//   numbers.forEach((n, k) => {
//     total += n;
//   });

//   console.log(total / numbers.length);
// };
// getAverage(6, 10, 20, 30, 20, 16);

// var obj_1 = {
//   name: "Melihşah",
// };

// obj_1.age = 21;

// obj_2 = { ...obj_1, location: "Alanya 07400" };

// console.log(obj_2);

var myName = "Melihşah";

const func_1 = () => {
  let age = 21;
  console.log("SCOPE...:", myName, age);
};

func_1();

console.log(myName);
