const express = require("express");
const path = require("path");
const app = express();

// Կարևոր է Render-ի համար. վերցնում է Render-ի պորտը կամ 3000-ը
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ֆայլերի թղթապանակի ճիշտ միացում
app.use(express.static(path.join(__dirname)));

const users = [{ username: "123456", password: "myPassword123" }];

// Գլխավոր էջի կարգավորում. երբ մտնում են կայք, ավտոմատ կբացվի ձեր էջը
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Index (2).html"));
});

// Google-ի ֆայլի կարգավորում. որպեսզի Google Search Console-ը կարողանա կարդալ այն
app.get("/google47645699365436c3.html", (req, res) => {
  res.sendFile(path.join(__dirname, "google47645699365436c3.html"));
});

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
  console.log(`Պորտ՝ ${PORT}`);
  console.log(`==================================================`);
});
