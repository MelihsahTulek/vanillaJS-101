// const islem_1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("islem_1"));
//     }, 1000);
//   });
// };

// const islem_2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("islem_2"));
//     }, 2000);
//   });
// };

// const islem_3 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("islem_3"));
//     }, 100);
//   });
// };

// const run = async () => {
//   await islem_1();
//   await islem_2();
//   await islem_3();
// };

// run();

// const connectStatus = true;

// const connectToApi = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (connectStatus) {
//         resolve("Connection Successful...");
//       } else {
//         reject("Connection Fail!");
//       }
//     }, 2500);
//   });
// };

// connectToApi()
//   .then((msg) => console.log(msg))
//   .then(() => {
//     [1, 2, 3, 4, 5].forEach((elem) => {
//       console.log(`Data: ${elem}`);
//     });
//   })
//   .catch((errMsg) => console.log(errMsg));

const status = true;

const start = async () => {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status) {
          resolve({
            json_data: [
              {
                id: 1,
                country: "China",
                ipAddress: "171.84.53.106",
                name: "gpalfrie0",
              },
              {
                id: 2,
                country: "China",
                ipAddress: "128.156.65.214",
                name: "ueland1",
              },
              {
                id: 3,
                country: "Uganda",
                ipAddress: "86.164.80.191",
                name: "rnorthen2",
              },
              {
                id: 4,
                country: "Guatemala",
                ipAddress: "8.249.56.239",
                name: "tmallord3",
              },
              {
                id: 5,
                country: "Indonesia",
                ipAddress: "206.76.115.226",
                name: "siston4",
              },
            ],
          });
        } else {
          reject("Hata Var");
        }
      }, 1000);
    });

    let json = await data.json_data;
    let filterResult = json.filter((u) => u.country === "China");
    console.log(filterResult);
  } catch (error) {
    console.log(error);
  }
};

start();
