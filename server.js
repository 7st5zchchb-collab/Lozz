const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../")));

const users = [{ username: "123456", password: "myPassword123" }];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    return res.status(400).json({ error: "Սխալ հաշվի համար կամ գաղտնաբառ:" });
  }
  res.status(200).json({ message: `Բարի գալուստ, Հաշիվ N ${username}!` });
});

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find((u) => u.username === username);

  if (userExists) {
    return res
      .status(400)
      .json({ error: "Այս հաշվի համարը արդեն գրանցված է:" });
  }
  users.push({ username, password });
  res.status(201).json({ message: "Գրանցումը հաջողությամբ կատարվեց:" });
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`Սերվերը հաջողությամբ միացվեց!`);
  console.log(`Բացեք կայքը այս հասցեով՝ http://localhost:3000/Index (2).html`);
  console.log(`==================================================`);
});
