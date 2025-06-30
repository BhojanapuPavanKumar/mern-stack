//React
// const k = document.createElement("li");
// const k1 = document.createElement("li");
// const kk = document.createElement("ul");
// k.innerText = "Item 1";
// k1.innerText = "Item 2";
// const kkk = document.getElementById("root");
// kk.appendChild(k);
// kk.appendChild(k1);
// kkk.append(kk);

//--------------React
// const i1 = React.createElement("li", {}, "Item1"); //tag,attribute,content
// console.log(i1);
// const i2 = React.createElement("li", {}, "Item2");
// const list = React.createElement("ul", {}, [i1, i2]);

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);
// reactRoot.render(list);

//----------------------------------------------------------
// const item1 = {
//   $$typeof: Symbol.for("react.element"),
//   type: "li",
//   key: null,
//   ref: null,
//   props: {
//     children: "Item1 + 20",
//   },
//   _owner: null,
//   _store: {},
// };

// const rootElem = document.getElementById("parent");
// const reactRoot = ReactDOM.createRoot(rootElem);
// reactRoot.render(item1);

//-------------------------------------//<script src="app.js" type="text/jsx"></script>
const i1 = <li>item 1</li>;
const list = (
  <ul>
    {i1}
    <li>item 2</li>
  </ul>
);
const rootElem = document.getElementById("parent");
const reactRoot = ReactDOM.createRoot(rootElem);
reactRoot.render(list);
