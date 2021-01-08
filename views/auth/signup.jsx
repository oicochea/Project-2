const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <h2>Create an account and start creating your list</h2>
        <div className="signUpForm">
        <form action="/auth/signup" method="POST">
          <label>Username</label>
          <input type="text" name="username" placeholder="username" />
          <label>Password</label>
          <input type="password" name="password" placeholder="password" />
          <label>Household</label>
          <input type="text" name="household" placeholder="Optional" />
          <input type="submit" value="signup" class="button"/>
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
