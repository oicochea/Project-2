const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {items , username} = this.props
    return (
      <Layout title="Shopping List"> 
        <h1> {username}'s List</h1>
        <h1 className="newItemButton"> <a href="/shoppingItems/new">Add New Item</a> </h1>
        {items.map((item, index) =>{
          return(
            <div Class="itemsToBuy">
              <h4>{item.itemName}</h4>
              <h4>Added: {item.dateAdded}</h4>
              <img src={`${item.img}`} alt="product" width="200" height="240"></img><br></br>
              <h4>Priority:{item.priority}</h4>
              <h4>{item.size}</h4>
              <h4>{item.qty}</h4>
              <h4>{item.buylink}</h4>
              </div>
        )
      }
       )}
       <h1 className="logoutButton"> <a href="/auth/logout">Log Out</a> </h1>

      </Layout>
    );
  }
}

module.exports = Index;
