const path = require('path');


module.exports = {
    applyStatics: (express, app) => {
        app.use(express.static(path.join(__dirname, '../uploads')));
    }
}