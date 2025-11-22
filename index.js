import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;
const saltRounds=10;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "",
  port: 5432
});

await db.connect()

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
const email = req.body.username;
const password=req.body.password;
console.log(`${email} ${password}`)
bcrypt.hash(password,saltRounds,(err,hash)=>{

})
try{
const check= await  db.query(`SELECT * FROM users WHERE email=$1`,[email])
if(check.rows.length>0){
  res.send("USER IS ALREADY REGISTERED")
}else{
  bcrypt.hash(password,saltRounds, async(err,hash)=>{
    if(err){ 
      console.log("ERROR IN HASHING:",err)
    }else{
      const push= await db.query(`INSERT INTO users (email,password) values($1,$2)`,[ email ,hash]);
      res.render("secrets.ejs")
    }})
  }
}catch(err){
  console.log(err)
}

  })

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const loginPassword=req.body.password;
  let userPassword;
  const login_user = await db.query(`SELECT * FROM users Where email=$1`,[email])
  if(login_user.rows.length>0){
    const user=login_user.rows[0];
    userPassword=user.password;
    console.log(userPassword);
  }else{
    res.send("USER IS NOT REGISTERED")
  }
  bcrypt.compare(loginPassword,userPassword,(err,result)=>{
   if(err){
      console.log("THERE IS AN ERR:",err)
    }else{
      if(result){
        res.render("secrets.ejs")
      }else{
        res.send("PASSWORD DID NOT MATCH")
      }
    }
  })


});

  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
