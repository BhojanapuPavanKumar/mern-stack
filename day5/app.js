// console.log("hello");
// const newdate = new Date();
// console.log("new Date:", newdate);

// let newd = null;

// const handleDateChange = (e) => {
//   newd = new Date(e.target.value);
//   console.log(newd);
//   const targetmillisecounds = newd.getTime();
//   console.log(targetmillisecounds);
//   const currentmillisecounds = Date.now();
//   console.log(currentmillisecounds);
//   const diffmillisecounds = (targetmillisecounds - currentmillisecounds) / 1000;
//   console.log(diffmillisecounds);
// };

// ------------------------------------------------------------
// const pr = window.fetch("http://dummyjson.com/products");
// console.log(pr);
// console.log(pr);

// // pr.then().catch();

// const successCb = (response) => {
//   console.log("Response", response);
//   const pr2 = response.json();
//   pr2.then((data) => {
//     renderUI(data);
//   });
// };
// const errorCb = (err) => {
//   alert("unable to get products -->", errorCb.message);
// };
// pr.then(successCb).catch(errorCb);

// const renderUI = (data) => {
//   const { products } = data;
//   products.arrEach((el) => {
//     const ndiv = document.createElement("div");
//     ndiv.innerHTML = `
//         <p>${el.title}</p>
//         <img src="${el.thumbnail}" width=173/>
//         `;
//   });
// };

////////////////////////--------------------------------------------------------
// Works in Node.js v18+
// fetch("http://dummyjson.com/products")
//   .then((response) => {
//     const pr2 = response.json();
//     pr2.then((data) => {
//       console.log(data);
//     });
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error("Unable to get products:", err.message);
//   });

// const request = fetch();
// request.then().catch();

// fetch()
//   .then((resp) => {
//     resp
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch();
//   })
//   .catch();

// fetch()
//   .then((resp) => {
//     return resp.json();
//   })
//   .catch()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch();
