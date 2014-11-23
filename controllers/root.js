exports.index = function(req, res) {
	res.render('index', {
		title: 'D3 Graphing'
	});
}

exports.clientView = function(req, res) {
	var name = req.params.name;

	res.render('client/' + name);
}