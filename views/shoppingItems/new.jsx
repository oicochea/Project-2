const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {items , username} = this.props
    return (
      <Layout title="New Item"> 
        <h1> {username} add an Item to your list</h1>
        <div className="newForm">
       <form action="/shoppingItems/" method= "post">
         <label>Iteam Name</label>
      <input type="string" name="itemName" />
      <label>Image Url</label>
      <input type="string" name="img"/>
      <label>Size</label>
      <input type="string" name="size"/>
      <label>Quantity</label>
      <input type="string" name="qty"/>
      <label>Store</label>
      <input type="string" name="store"/>
      <label>Online Buy Link</label>
      <input type="string" name="buylink"/>
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
        <input type= "submit" value="Add Item"/>
        
        </form>
        </div>

       <h1 className="logoutButton"> <a href="/auth/logout">Log Out</a> </h1>
      
      </Layout>
    );
  }
}

module.exports = Index;
