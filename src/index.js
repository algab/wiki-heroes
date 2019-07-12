const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.static('./data/img'));
app.use(cors());

app.set('port', process.env.PORT || 5000);

require('./api')(app);

(async () => {
    try {
        await app.listen(app.get('port'));
        console.log(`Server Running on Port ${app.get('port')}`);
    } catch (error) {
        console.error(error);
    }
})();
