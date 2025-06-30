console.log("helloo");
const domRoot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domRoot);

const arr = [
  {
    name: "prabjyot",
    score: 29,
  },
  {
    name: "Rakesh",
    score: 21,
  },
  {
    name: "Mohan",
    score: 16,
  },
  {
    name: "Anurag",
    score: 39,
  },
  {
    name: "priyanshu",
    score: 47,
  },
];

const Card = (props) => {
  const { name, score } = props;
  return (
    <div className="card">
      <h1 style={{ color: "Blue" }}>{name}</h1>
      <h2 style={styleObj}>{score}</h2>
    </div>
  );
};

const App1 = () => {
  return (
    <div className="parent">
      <h1>Hello</h1>
      {arr.map((val, ind) => (
        <Card key={ind} name={val.name} score={val.score} />
      ))}
    </div>
  );
};

const styleObj = {
  color: "red",
  fontSize: "1.5rem",
  fontWeight: "600",
};

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      {arr.map((val) => {
        return <Card name={val.name} score={val.score} />;
      })}
    </div>
  );
};

reactRoot.render(App1());
