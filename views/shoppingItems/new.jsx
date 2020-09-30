const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {items , username} = this.props
    return (
      <Layout title="New Item"> 
        <h1> {username} add an Item to your list</h1>
        <form action="/shoppingItems/" method= "post">
      <input type="string" name="itemName" value="Item Name"/>
      <input type="string" name="size"  value="Size"/>
      <input type="string" name="qty"    value="Quantity"/>
      <input type="string" name="store"  value="Store"/>
      <input type="string" name="buylink" value= "Online Buy Link"/>
      <select type= "number" id="priority" name="prioriy">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
              </select> 
      <input type="date" name="dateAdded" defaultValue = {Date.now}/>
        <input type= "submit" value="Add Item"/>
       
       <h1 className="logoutButton"> <a href="/auth/logout">Log Out</a> </h1>
      </form>
      </Layout>
    );
  }
}

module.exports = Index;
