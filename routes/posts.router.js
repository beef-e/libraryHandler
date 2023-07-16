const express = require('express');
const router = express.Router();
const pool = require('../database/index');

const postsController = require('../controller/posts.controller.js');

router.get('/', (req, res) => {
	try {
		const [rows, fields] = pool.query('SELECT * FROM libri');
		res.json({
			data: rows,
		});
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
