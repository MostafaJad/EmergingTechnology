// exports.render = function(req, res) {
//   if(req.session.lastVisit){
//     console.log(`Last Visit: ${req.session.lastVisit}`);
//   }
//   req.session.lastVisit = new Date();
//   let { email } = req.body;
//   req.session.email = email;
//   res.redirect('/evaluate');
//   };
exports.render = (req, res) => {
  res.render('welcome');
};

exports.welcome = (req, res) => {
  let { email } = req.body;
  req.session.email = email;
  res.redirect('/evaluate');
}