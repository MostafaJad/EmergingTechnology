const index = require('../controllers/evaluate.server.controller');

module.exports = (app)=>{
    app.get('/evaluate', index.render);
    app.post('/evaluate', index.evaluate);


};