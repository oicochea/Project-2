const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.min.css" integrity="sha512-xiunq9hpKsIcz42zt0o2vCo34xV0j6Ny8hgEylN3XBglZDtTZ2nwnqF/Z/TTCc18sGdvCjbFInNd++6q3J0N6g==" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:300,900display=swap" rel="stylesheet"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Welcome To <span>Self-List!</span></h1>
            <h3>Create your shopping List or one for your Household! </h3>
          </header>
          <nav className="navBar">
          <a href="/shoppingItems/new">Add Item</a>
          <a href="/shoppingItems/">See My List</a>
          <a href="/auth/logout">Logout</a>
          </nav>
          <main>{this.props.children}</main>
          <footer>
            <h1>You Can Have Multiple Contributors!</h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;