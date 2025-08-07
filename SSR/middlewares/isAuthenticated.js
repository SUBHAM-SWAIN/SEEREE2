exports.isAuthenticatedAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === "admin") {
    return next();
  } else {
    return res.redirect("/login");
  }
};

exports.isAuthenticatedUser = (req, res, next) => {
  if (req.session.user && req.session.user.role === "student") {
    return next();
  } else {
    return res.redirect("/login");
  }
};
