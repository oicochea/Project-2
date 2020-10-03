const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {item , username} = this.props
    return (
      <Layout title="Edit Item"> 
        <h1> {username} Update {item.itemName}</h1>
        <div className="editForm">
        <form action={`/shoppingItems/edit/${item.id}?_method=put`} method = "POST">
      <label>Iteam Name</label>
      <input type="string" name="itemName"/>
      <label>Size</label>
      <input type="string" name="size" />
      <label>Quantity</label>
      <input type="string" name="qty" />
      <label>Store</label>
      <input type="string" name="store" />
      <label>Online Buy Link</label>
      <input type="string" name="buylink"/>
      <label>Household, Optional:</label>
      <input type="string" name="household"/>
      <label>Priority</label>
      <select type= "number" id="priority" name="priority">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
              </select> 
              <label>Date</label>
      <input type="date" name="dateAdded" defaultValue = {Date.now}/>
       <input type= "submit" value="Update"/>

       </form>
      </div>
      <h1 className="logoutEditButton"> <a href="/auth/logout">Log Out</a> </h1>
      </Layout>
    );
  }
}

module.exports = Index;
