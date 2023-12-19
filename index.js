const express = require('express');

const app = express();
const os = require('os');
const path = require('path');

const hostname = os.hostname();

// app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
	res.render('index', {hostname});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App Server running at http://localhost:${PORT}`));
