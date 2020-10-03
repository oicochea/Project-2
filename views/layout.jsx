const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Welcome To <span>Self-List!</span></h1>
            <h3>Create your shopping List! </h3>
          </header>
          <nav className="navBar">
          <a href="/shoppingItems/new">Add Item</a>
          <a href="/shoppingItems/">See My List</a>
          <a href="/auth/logout">Logout</a>
          </nav>
          <main>{this.props.children}</main>
          <footer>
            <h1>You Can Share your Shopping List With anyone!</h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;