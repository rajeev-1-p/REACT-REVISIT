// const heading = React.createElement(
//   "h1",
//   { id: "headingg" },
//   "Hey, This is Rajeev"
// );

// console.log(heading);  // this will return a object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(root);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello its me second Prent"),

  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello its me 1st child"),
    React.createElement("h1", {}, "Hello its me 2nd child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

const rajeev = React.createElement("h1", {}, "hello its me Rajeev");

const rajev = ReactDOM.createRoot(document.getElementById("rajeev"));

rajev.render(rajeev);
