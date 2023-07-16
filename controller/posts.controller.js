const pool = require('../database/index');

const postsController = {
	getAll: (req, res) => {
		try {
			const [rows, fields] = pool.query('SELECT * FROM libri');
			res.json({
				data: rows,
			});
		} catch (error) {
			console.log(error);
		}
	},
};

module.exports = postsController;
