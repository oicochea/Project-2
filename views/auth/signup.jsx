const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <h2>Create an account and start creating your list</h2>
        <div className="signUpForm">
        <form action="/auth/signup" method="POST">
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
          <input type="submit" value="signup" />
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
