// express 語法
const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); //有加這一行再render的時候就不用打 xx.ejs

app.get("/", (req, res) => {
  const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
  ];
  res.render("index", { languages });
});

app.get("/example", (req, res) => {
  let { name, age } = req.query;
  res.render("response", { name, age });
});

//port, callback
app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
