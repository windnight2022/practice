// express 語法
const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs"); //有加這一行再render的時候就不用打 xx.ejs

app.get("/", (req, res) => {
  let myString = "<h1>Hello World!</h1>";
  res.render("index", { myString });
});

//port, callback
app.listen(3000, () => {
  console.log("伺服器正在聆聽port 3000....");
});
