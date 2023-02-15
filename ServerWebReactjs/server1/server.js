import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const books = [
  {
    id: 1,
    name: "Chi Pheo",
    author: "Ta Van Cuong",
  },
  {
    id: 2,
    name: "Lao Hac vs Cau Vang",
    author: "Kim Lien",
  },
];

// app.post("/login", (req, res) => {
//   //Authorization
//   // {username: "Test"}
//   const data = req.body;
//   console.log({ data });
//   const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "30s",
//   });
//   res.json({ accessToken });
// });

app.get("/books", authenToken, (req, res) => {
  res.json({ status: "Success", data: books });
});

function authenToken(req, res, next) {
  const authorization = req.headers["authorization"];
  // 'Beaer [token]'
  const token = authorization.split(" ")[1];
  if (!token) res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
    console.log(err, data);
    if (err) res.sendStatus(403);
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server is running  on PORT ${PORT}`);
});
