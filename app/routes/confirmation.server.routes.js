const index = require('../controllers/confirm.server.controller');

module.exports = (app) => {
	app.get('/confirmation', index.render);	
};