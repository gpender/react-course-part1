const path = require('path');
// entry -> output
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    }
};