const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');

const app = express();

// custom written: logging middleware
// app.use((req, res, next) => {
//     console.log('Request IP: ' + req.url);
//     console.log('Request date: '+ new Date());
//     next();
// });

// use 3rd party logger MORGAN - "dont reinvent the wheel bro."
app.use(logger('tiny'));

// custom written: filepath & filesystem middleware
// app.use((req, res, next) => {
//     const filePath = path.join(__dirname, 'static', req.url);
//     fs.stat(filePath, (err, fileInfo) => {
//         if (err) {
//             next();
//             return;
//         }
//
//         if (fileInfo.isFile()) {
//             res.sendFile(filePath);
//         } else {
//             next();
//         }
//     });
// });

// use 3rd party static expressStatic - "dont reinvent the wheel bro."
const staticPath = path.join();
app.use(express.static(staticPath));

// Error handling middleware
// app.use((req, res) => {
//     res.status(404);
//     res.send('File not found!')
// });

// logs the error in lieu of logging the request in
app.use((err, req, res, next) => {
    console.error(err.stack);
    next(err);
});

/**
 * @desc : starting the app
 * @todo : update to use variable in lieu of static number(3000)
 * */
app.listen(3000, () => console.log('App running @ port 3000'));

// app.use((req, res, next) => {
//    res.sendFile(filePath, (err) => {
//        if (err) next(new Error('Error sending file!'));
//    })
// });

