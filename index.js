const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', async (req, res) => {
	res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App Server running at http://localhost:${PORT}`));
