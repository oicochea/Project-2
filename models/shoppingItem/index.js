///////////////////////////////////
// IMPORT SCHEMA AND MODEL
///////////////////////////////////
const { Schema, model } = require("mongoose");

////////////////////////////////////
// CREATE SCHEMA
////////////////////////////////////

const shoppingItemSchema = new Schema({
  // username: { type: String, required: true },
  itemName: { type: String, required: true },
  size: { type: String },
  qty: { type: String, required: true },
  priority: { type: Number },
  buylink:{ type: String },
  store:{ type: String },
  img:{ type: String },
  dateAdded:{type: Date, default: Date.now}
})
;

////////////////////////////////////
// CREATE MODEL
////////////////////////////////////
const shoppingItem = model("item", shoppingItemSchema);

////////////////////////////////////
// EXPORT MODEL
////////////////////////////////////
module.exports = shoppingItem;
