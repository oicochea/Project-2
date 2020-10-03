const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <div className="loginForm">
        <form action="/auth/login" method="post">
          <label>Username</label>
          <input type="text" name="username"/>
          <label>Password</label>
          <input type="password" name="password"/>
          <label>Household</label>
          <input type="text" name="household" value="If Created"/>
          <input type="submit" value="login"/>
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
