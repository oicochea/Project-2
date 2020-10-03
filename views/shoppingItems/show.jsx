const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {item , username} = this.props
    return (
      <Layout title="Shopping List"> 
        <h1 className="newItemButton"> <a href="/shoppingItems/new">Add New Item</a> </h1>
        <div className="showBox">
        <div Class="showItemsToBuy">
             <h4><a href = {`/shoppingItems/show/${item.id}`}>Item: {item.itemName}</a></h4>
              <img src={`${item.img}`} alt="product" width="300"></img><br></br>
              <h5>Priority:{item.priority}</h5>
              <h5>Size:{item.size}</h5>
              <h5>Quantity:{item.qty}</h5>
              <h5>Date Added:{item.dateAdded}</h5>
              <h5><a href={item.buylink} target="_blank">Online link</a></h5>
              <form action={`/shoppingItems/edit/${item.id}`}        method="GET">
              <input className="itemButtons" type ="submit" value="edit"/>
              </form>
              <form action={`/shoppingItems/${item.id}?_method=DELETE`}        method="POST">
                <input className="itemButtons" type ="submit" value="Delete"/><br></br>
                <input className="itemButtons" type ="submit" value="Purchased"/>
              </form>
              </div>
              </div>
       <h1 className="logoutButton"> <a href="/auth/logout">Log Out</a> </h1>

      </Layout>
    );
  }
}

module.exports = Index;
