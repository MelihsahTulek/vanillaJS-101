const todos = [
  { title: "Kahvaltı Yap", isOk: false },
  { title: "Bulaşıkları Yıka", isOk: false },
  { title: "Kitap Oku", isOk: false },
];

const todoList = () => {
  setTimeout(() => {
    todos.forEach((elem) => {
      console.log(elem);
    });
  }, 1000);
};

const addNewTodo = (param, callBack) => {
  setTimeout(() => {
    todos.push(param);
    callBack();
  }, 2000);
};

addNewTodo({ title: "Televizyon İzle", isOk: false }, todoList);

todoList();
