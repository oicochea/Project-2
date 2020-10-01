//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/auth/");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// SIGNUP PAGE
router.get("/signup", (req, res) => {
  res.render("auth/signup.jsx");
});

// CREATE NEW USER POST REQUEST
router.post("/signup", async (req, res) => {
  // ENCRYPT THE PASSWORD
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // SAVE NEW USER IN DB
  const newUser = await User.create(req.body);
  // Redirect to login page
  res.redirect("auth/login");
});

// LOGIN PAGE
router.get("/login", (req, res) => {
  res.render("auth/login.jsx");
});

// LOGIN POST REQUEST
router.post("/login", async (req, res) => {
  // FIND USER
  const user = await User.find({ username: req.body.username });
  //CHECK IF USER WAS FOUND
  if (user.length > 0) {
    // COMPARE PASSWORD
    const check = await bcrypt.compare(req.body.password, user[0].password);
    if (check) {
      //SAVE INFO IN SESSION THAT USER IS LOGGEDIN AND USERNAME
      req.session.login = true;
      req.session.username = user[0].username;
      res.redirect("/shoppingItems/");
    } else {
      // Redirect to login page if failed
      res.render("auth/fail.jsx");
    }
  } else {
    // Redirect to login page if failed
    res.render("auth/fail.jsx");
  }
});

//LOGOUT
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
