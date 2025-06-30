console.log("hello js");
// console.dir(document.children[0].children[1].children[0]);
// // 1. document.getElementsByTagName("h1"); --> [ ] (iterable)(html collection)
// const m = document.getElementsByTagName("h1");
// m[0].innerText = "hello it got changed";

// // 2. document.getElementsByClassname("h1"); --> [ ] (iterable)(html collection)
// const m = document.getElementsByClassName("card");
// m[0].innerText = "hello it got changed";
// m[0].style.color = "green";
// m[0].style.background = "pink";

// // 3. document.getElementById("h1"); --> [ ] (iterable)(html collection)
// const m = document.getElementById("c1");
// m.style.background = "blue";

// // 4. document.querySelectorAll--> [](NODE LIST)
// const titles = document.querySelectorAll("h1");
// console.log(titles);

// // 4. document.querySelector--> [](ELEMENT or null)
// titles = document.querySelector("h1");
// console.log(titles);
// titles = document.querySelector("#c1");
// console.log(titles);
// titles = document.querySelector(".card");
// console.log(titles);
// titles.style.background = "blue";

//------------------------------------------------
// const child = document.createElement("h1");
// child.innerText = "h1 tag created inside root id";
// const parent = document.getElementById("root");
// parent.append(child);

//---------------------------------------------------------------
