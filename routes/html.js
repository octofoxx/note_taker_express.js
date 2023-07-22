const path = require('path');

module.exports = (pages) => {
    //grabs the notes page
    pages.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    //grabs the main landing page
    pages.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};