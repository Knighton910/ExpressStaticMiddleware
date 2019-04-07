const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');

const app = express();

// logging middleware
// app.use((req, res, next) => {
//     console.log('Request IP: ' + req.url);
//     console.log('Request date: '+ new Date());
//     next();
// });

// use 3rd party logger MORGAN - "dont reinvent the wheel bro."
app.use(logger('short'));

// filepath & filesystem middleware
app.use((req, res, next) => {
    const filePath = path.join(__dirname, 'static', req.url);
    fs.stat(filePath, (err, fileInfo) => {
        if (err) {
            next();
            return;
        }

        if (fileInfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

// Error handling middleware
app.use((req, res) => {
    res.status(404);
    res.send('File not found!')
});

/**
 * @desc : starting the app
 * @todo : update to use variable in lieu of static number(3000)
 * */
app.listen(3000, () => console.log('App running @ port 3000'));

