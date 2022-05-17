let express = require('express');
let router = express.Router();


router.get('/person', (req,res) => {
    res.render('index');
});

module.exports = router;