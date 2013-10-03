
module.exports.create = function(app) {
	// Generic Api setup
	app.get('/apis/welcome', function (req, res) {
		res.json({
			title: 'Welcome'
		});
	});
	
};