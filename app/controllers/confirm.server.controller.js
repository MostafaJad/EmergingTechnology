exports.render = (req, res) => {
    res.render('confirmation', { email: req.session.email });
};