// function ClassOne(name, age) {
//   this.name = name;
//   this.age = age;
// }

// var user_1 = new ClassOne("melihşah", 21);

// console.log(`User 1 : ${JSON.stringify(user_1)}`);

/*    */

class ClassTwo {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  userControl = () => {
    if (this.name === "melih" && this.password === "123") {
      return true;
    }
  };
}

let user_1 = new ClassTwo("melih", "123");

ClassTwo.prototype.userIsLogin = user_1.userControl();

console.log(user_1.userIsLogin ? "Giriş Başarılı..." : "Giriş Hatalı...");
