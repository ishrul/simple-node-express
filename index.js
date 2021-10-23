const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!  i am learning node and express");
});

const users = [
  {
    id: 0,
    name: "ishrul",
    email: "isvskeyes360@gmail.com",
    phone: "01821885020",
  },
  {
    id: 1,
    name: "kayes",
    email: "isvskeyes360@gmail.com",
    phone: "01821885020",
  },
  {
    id: 2,
    name: "hablu",
    email: "isvskeyes360@gmail.com",
    phone: "01821885020",
  },
  {
    id: 3,
    name: "bablu",
    email: "isvskeyes360@gmail.com",
    phone: "01821885020",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  console.log(newUser);
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "oranges", "banana"]);
});

/* app.get("*", (req, res) => {
  res.send("404, no page found");
}); */

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
