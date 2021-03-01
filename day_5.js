// class Employee {
//   constructor(name, age, salary, country) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.country = country;
//   }
// }

// let emp_1 = new Employee("Melih", 21, 4500, "Turkey");

// for (const key in emp_1) {
//   console.log(key, ":", emp_1[key]);
// }

class Calculate {
  constructor(...params) {
    this.numbers = params;
  }
  plus() {
    let total = 0;
    this.numbers.forEach((n) => {
      total += n;
    });
    console.log(total);
  }
  minus() {
    let total = 0;

    this.numbers
      .sort()
      .reverse()
      .forEach((n) => {
        if (total === 0) {
          console.log(n);
          total = n;
        } else {
          total -= n;
        }
      });
    console.log(total);
  }
}

// let sumNumbers = new Calculate(10, 25, 10, 85, 10, 188, -55);
// sumNumbers.plus();

let minusNumbers = new Calculate(10, 30, 50);
minusNumbers.minus();
