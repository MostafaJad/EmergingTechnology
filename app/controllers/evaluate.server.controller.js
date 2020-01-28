exports.render = (req, res) =>{
    res.render('evaluate', { email: req.session.email});

    if(req.session.lastVisit){
      console.log(`Last Visit: ${req.session.lastVisit}`);
    }

    };

    exports.evaluate = (req, res) => {
      res.redirect('confirmation');
  }