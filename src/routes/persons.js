let express = require('express');
let router = express.Router();


router.get('/person', (req,res) => {
    res.render('index');
});
router.post('/person', (req,res) => {
    res.send(`Nombre: ${req.body.fname}`)
});

module.exports = router;