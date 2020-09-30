const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form action="/auth/login" method="post">
          <input type="text" name="username" placeholder="username"/>
          <input type="text" name="password" placeholder="password"/>
          <input type="submit" value="login"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
