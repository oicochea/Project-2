const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="self-List">
        <h1> {this.props.title} </h1>
        <div className="indexMid">
        <h1 className="loginButton" > <a href="/auth/login">Log In</a> </h1><h1 className="createButton"><a href="/auth/signup">Create an Account</a></h1>
          </div>
      </Layout>
    );
  }
}

module.exports = Index;
