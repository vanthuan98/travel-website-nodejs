const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const { patch } = require('../../blog-bk/src/routes/news');
const dayjs = require('dayjs');
const methodOverride = require('method-override');

// import route
const route = require('./routes/index');

// connect database
const db = require('./config/db');
db.connect();


const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true,
}));

app.use(express.json());

app.use(methodOverride('_method'));

app.use(morgan('combined'));

app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) => a + b,
        formatDate: (datestr) => {
            return dayjs(datestr).format('MMMM DD, YYYY');
        }
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});