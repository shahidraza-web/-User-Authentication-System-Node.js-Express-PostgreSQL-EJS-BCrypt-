# -User-Authentication-System-Node.js-Express-PostgreSQL-EJS-BCrypt-
🛡️ Secret Sharing App (Node.js + Express + PostgreSQL + EJS + BCrypt)  A simple user authentication system built using Node.js, Express, PostgreSQL, EJS templates, and BCrypt for secure password hashing. This project demonstrates registration, login, password encryption, and secure database storage using modern backend practices.

![Image Alt](https://github.com/shahidraza-web/-User-Authentication-System-Node.js-Express-PostgreSQL-EJS-BCrypt-/blob/6d289225084d2215666410f2e4e4bb6c6193c14f/Authentication1.jpg)

![Image Alt](https://github.com/shahidraza-web/-User-Authentication-System-Node.js-Express-PostgreSQL-EJS-BCrypt-/blob/e28d1359110ed540548d6484787568a816d7f9ae/Authentication2.jpg)

![Image Alt](https://github.com/shahidraza-web/-User-Authentication-System-Node.js-Express-PostgreSQL-EJS-BCrypt-/blob/10fe4d692b18162985f5e8e9af2bc492c1716d7c/Authentication3.jpg)

![Image Alt](https://github.com/shahidraza-web/-User-Authentication-System-Node.js-Express-PostgreSQL-EJS-BCrypt-/blob/65d3eaf6fa552e9d576bf41f68a41d4cb06cd408/Authentication5.jpg)

🚀 Features

🔐 User Registration
1.Users can create an account using email and password
2.Passwords are hashed using bcrypt before saving to the database
3.Prevents duplicate registrations with the same email

🔑 User Login
1.Validates user email
2.Compares login password with hashed password stored in PostgreSQL
3.Secure login validation using bcrypt.compare()

🎨 EJS Templating

1.Clean UI pages for:
2.Home
3.Login
4.Registration
5.Secrets page (after successful login)


🛡️ Security Best Practices

1.Password hashing with saltRounds = 10
2.No plain-text password storage
3.Backend validation for both registration and login


🧩 Tech Stack

1.Node.js
2.Express.js
3.EJS (templating engine)
4.PostgreSQL
5.pg (node-postgres)
6.bcrypt for hashing
7.body-parser


📚 How It Works


1️⃣ Registration Flow
User submits email + password
Backend checks if email already exists
Password is hashed (bcrypt.hash)
New user is inserted into PostgreSQL

2️⃣ Login Flow
User submits email + password
Backend retrieves the stored hashed password
bcrypt.compare() checks correctness
Successful login → loads secrets.ejs
Incorrect password → error prompt


1.Uses pg Client to connect to a PostgreSQL database
2.Stores user credentials securely
