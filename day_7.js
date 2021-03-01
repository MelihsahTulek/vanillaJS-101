// const todos = [
//   { title: "Kahvaltı Yap", isOk: false },
//   { title: "Bulaşıkları Yıka", isOk: false },
//   { title: "Kitap Oku", isOk: false },
// ];

// const todoList = () => {
//   setTimeout(() => {
//     todos.forEach((elem) => {
//       console.log(elem);
//     });
//     console.log("*********");
//   }, 1000);
// };

// const addNewTodo = (todo) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos.push(todo);
//       resolve();
//     }, 2000);
//   });
// };

// todoList();

// addNewTodo({ title: "Dolaşmaya Çık", isOk: false }).then(() => {
//   todoList();
// });

const promise_1 = Promise.resolve("P1");

const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ben Promise 2");
  }, 2000);
});

const promise_3 = "Ben Promise 3 , Sıramı Bekliyorum...";

Promise.all([promise_1, promise_2, promise_3]).then((promiseList) =>
  console.log(promiseList)
);
