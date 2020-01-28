const index = require('../controllers/index.server.controller');

module.exports = (app)=>{
    app.get('/', index.render);
    app.post('/', index.welcome);

};