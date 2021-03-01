const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Selamlar");
  }, 3000);
});

req.then((data) => console.log(data));
