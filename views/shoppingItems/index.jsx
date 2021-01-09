const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {items , username , household} = this.props
    console.log(household)
    return (
      <Layout title="Shopping List"> 
        <p className="username"> {username}'s Shopping List</p>
        <h1 className="newItemButton"> <a href="/shoppingItems/new">Add New Item</a> </h1>
        <h1 className="newItemButton"> <a href={`/shoppingItems/household/${household}`}>Household List</a> </h1>
        <div className="itemsContainer">
        {items.map((item, index) =>{
          return(
            <div class="box">
            <div Class="itemsToBuy">
            <img src={`${item.img}`} alt="product"></img><br></br>
             <p><a href = {`/shoppingItems/show/${item.id}`}>Item: {item.itemName}</a></p>
              
              <p>Priority:{item.priority}</p>
              <p>Size:{item.size}</p>
              <p>Quantity:{item.qty}</p>
              <p>Date Added:{item.dateAdded}</p>
              <p>List:{item.household}</p>
              <p><a href={item.buylink} target="_blank">Online link</a></p>
              <form action={`/shoppingItems/edit/${item.id}`}        method="GET">
              <input className="itemButtons" type ="submit" value="edit"/>
              </form>
              <form action={`/shoppingItems/${item.id}?_method=DELETE`}        method="POST">
                <input className="itemButtons" type ="submit" value="Delete"/>
                <input className="itemButtons" type ="submit" value="Purchased"/>
              </form>
              </div>
              </div>
        )
      }
       )}
       </div>
       <h1 className="logoutButton"> <a href="/auth/logout">Log Out</a> </h1>

      </Layout>
    );
  }
}

module.exports = Index;
