//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const shoppingItem = require("../../models/shoppingItem/index")
const User = require("../../models/auth/index")
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
      const items =  await shoppingItem.find({username: req.session.username})
      console.log( await items)
      res.render("shoppingItems/index.jsx", {items: items , household:req.session.household , username: req.session.username})
       }catch(err){
        console.log(err)
      }
});

//New route

router.get ('/new' , auth , async (req,res)=>{
  try{
    req.body.username = req.session.username
    res.render("shoppingItems/new.jsx" ,{ username: req.session.username})
  }
  catch(error){
    console.log(error)
  }
});



//create
router.post('/', auth , async (req,res)=>{
  try{
    req.body.username = req.session.username
    const newItem = await shoppingItem.create(req.body)
    res.redirect("/shoppingItems/")
  }
  catch(error){
    console.log(error)
  }
});

//&Delete route

router.delete("/:id", auth, async (req,res)=>{
  try{
    await shoppingItem.findByIdAndDelete(req.params.id)
    res.redirect("/shoppingItems/")
  }
  catch(error){
    console.log(error)
  }
});

//+& edit

router.get("/edit/:id" , auth, async (req, res) => {
  try{
    req.body.username = req.session.username
    const item = await shoppingItem.findById(req.params.id)
    res.render("shoppingItems/edit.jsx",{item : item,  username: req.session.username})
  }
  catch(error){
    console.log(error)
  }

});


router.get("/household/:householdname" , auth, async (req, res) => {
  try{
    req.body.username = req.session.username
    list = req.params.householdname
    const item = await shoppingItem.find({household: req.params.householdname})
    res.render("shoppingItems/householdIndex.jsx",{item: item , list})
  }
  catch(error){
    console.log(error)
  }

});

//Update

router.put("/edit/:id" , auth, async (req, res) => {
  try{
    await shoppingItem.findByIdAndUpdate(req.params.id , req.body)
    res.redirect("/shoppingItems/")
  }
  catch(error){
    console.log(error)
  }
});

router.get("/show/:id" , auth, async (req, res) => {
  try{
    req.body.usernmae = req.session.username
    const item = await shoppingItem.findById(req.params.id)
    res.render("shoppingItems/show.jsx",{item : item})
  }
  catch(error){
    console.log(error)
  }

});


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
