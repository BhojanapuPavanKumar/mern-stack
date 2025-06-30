const domRoot = document.getElementById("root");

const reactRoot = ReactDOM.createRoot(domRoot);

const Card = (obj) => {
  //component and function
  return (
    <div className="card">
      <h1>{obj.title}</h1>
      <p>Description</p>
    </div>
  );
};
// const Card1 = (
//   <div className="card">
//     <h1>Notification</h1>
//     <p>Description</p>
//   </div>
// );
const Card2 = //react element
  (
    <div className="card">
      <h1>----Done----</h1>
      <p>Description</p>
    </div>
  );

// <Card title="Notice" /> || <Card title="Notice" ></Card>//props
const Container = (
  <div>
    {Card({ title: "Hello" })}
    <Card title="Notice" />
    {Card({ title: "happening" })}
    {Card2}
  </div>
);

reactRoot.render(Container);

// reactRoot.render(() => {
//   <div>
//     <h1>Hello</h1>
//     <div>
//       <p>Hi</p>
//       <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//       </ul>
//     </div>
//   </div>;
// });
