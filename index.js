const express = require('express');
const app = express();

require('dotenv').config();

const postsRouter = require('./routes/posts.router.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Alive on port ${PORT}`);
});
