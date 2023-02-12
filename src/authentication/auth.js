const Auth = {
  isAuthenticated: false,
  signin(callback) {
    Auth.isAuthenticated = true;
    callback();
  },
  signout(callback) {
    Auth.isAuthenticated = false;
    callback();
  },
};
