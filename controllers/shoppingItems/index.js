//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const shoppingItem = require("../../models/shoppingItem/index")
///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

//index route//

router.get('/' , auth , async (req,res )=>{
  try{
      req.body.username = req.body.session
      const items =  await shoppingItem.find({username: req.session.username})
      res.render("shoppingItems/index.jsx", {items: items , username: req.session.username})
       }catch(err){
        console.log(err)
      }
});

//New route

router.get ('/new' , auth , async (req,res)=>{
  res.render("shoppingItems/new.jsx")
})


router.post('/', auth , async (req,res)=>{
  req.body.username = req.body.session
  const newItem = await shoppingItem.create(req.body)
  res.redirect("shoppingItems/index.jsx")
})


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
